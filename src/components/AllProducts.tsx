import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "./ProductCard";

export function AllProducts() {
  const { products } = useProducts();
  return (
    <>
      {products.map((product) => (
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
      ))}
    </>
  );
}
