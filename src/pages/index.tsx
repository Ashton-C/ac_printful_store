import * as React from "react";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";

import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types";

import ProductGrid from "../components/ProductGrid";
import Product from "../components/Product";
import "../lunchtime-doubly-so-font/LunchtimeDoublySoRegular-D0B3.ttf";

let randomHero = Math.floor(Math.random() * 6);

type IndexPageProps = {
  products: PrintfulProduct[];
};

const IndexPage: React.FC<IndexPageProps> = ({ products }) => (
  <>
    <div className="hero grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <div className="heroText p-4 border-8 border-purple-600">
        <h3>Welcome to ZHIRTZ!</h3>
        <p>
          I just wanted a place to make and order dank shirts for my wife and
          myself, but perhaps youll like them too! Thanks for visiting!
        </p>
      </div>
      <Product
        className="heroProduct"
        key={products[randomHero].id}
        {...products[randomHero]}
      />
    </div>
    <div className="text-center pb-6 md:pb-12">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        All Products
      </h1>
    </div>

    <ProductGrid products={products} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { result: productIds } = await printful.get("sync/products");

  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  );

  const products: PrintfulProduct[] = allProducts.map(
    ({ result: { sync_product, sync_variants } }) => ({
      ...sync_product,
      variants: sync_variants.map(({ name, ...variant }) => ({
        name: formatVariantName(name),
        ...variant,
      })),
    })
  );

  return {
    props: {
      products: shuffle(products),
    },
  };
};

export default IndexPage;
