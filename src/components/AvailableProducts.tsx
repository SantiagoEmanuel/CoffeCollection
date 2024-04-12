import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "./ProductCard";

export function AvailableProducts() {
  const { products } = useProducts();

  return (
    <>
      {products.map((product) => (
        <>
          {product.available ? (
            <ProductCard
              id={product.id}
              name={product.name}
              image={product.image}
              popular={product.popular}
              available={product.available}
              rating={product.rating}
              votes={product.votes}
              price={product.price}
              key={product.id}
            />
          ) : (
            ""
          )}
        </>
      ))}
    </>
  );
}
