import Product from "./Product";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 relative">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
