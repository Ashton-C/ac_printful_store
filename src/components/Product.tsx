import { useState } from "react";
import Image from "next/image";

import useWishlistDispatch from "../hooks/useWishlistDispatch";
import useWishlistState from "../hooks/useWishlistState";

import VariantPicker from "./VariantPicker";

const Product = (product) => {
  const { id, name, variants } = product;
  const [firstVariant] = variants;
  const oneStyle = variants.length === 1;

  const [activeVariantExternalId, setActiveVariantExternalId] = useState(
    firstVariant.external_id
  );

  const activeVariant = variants.find(
    (v) => v.external_id === activeVariantExternalId
  );

  const activeVariantFile = activeVariant.files.find(
    ({ type }) => type === "preview"
  );

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: activeVariant.currency,
  }).format(activeVariant.retail_price);

  const [prodName, series, description] = product.name.split("//");

  return (
    <article className="border border-gray-200 rounded bg-white flex-auto flex-col relative">
      <div className="p-1 m-1 seriesText">{series}</div>
      <div className="flex items-center justify-center flex-1 sm:flex-shrink-0 w-full p-6">
        {activeVariantFile && (
          <Image
            src={activeVariantFile.preview_url}
            width={250}
            height={250}
            alt={`${activeVariant.name} ${name}`}
            title={`${activeVariant.name} ${name}`}
          />
        )}
      </div>
      <div className="flex-1 p-6 pt-0">
        <div className="text-center">
          <p className="mb-1 font-semibold text-left productName">{prodName}</p>
          <p className="text-sm text-gray-500 text-left">{formattedPrice}</p>
        </div>
      </div>
      <div className="p-3 flex flex-col sm:flex-row justify-center items-center">
        <VariantPicker
          value={activeVariantExternalId}
          onChange={({ target: { value } }) =>
            setActiveVariantExternalId(value)
          }
          variants={variants}
          disabled={oneStyle}
        />
        <button
          className="snipcart-add-item w-full md:w-auto transition flex-shrink-0 py-2 px-4 border border-gray-300 hover:border-transparent shadow-sm text-sm font-medium bg-white text-gray-900 focus:text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:outline-none rounded"
          data-item-id={activeVariantExternalId}
          data-item-price={activeVariant.retail_price}
          data-item-url={`/api/products/${activeVariantExternalId}`}
          data-item-description={activeVariant.name}
          data-item-image={activeVariantFile.preview_url}
          data-item-name={name}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default Product;
