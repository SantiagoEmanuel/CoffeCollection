import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "../ProductCard";

export function Products({ filter }: boolean): JSX.Element {
  const { products } = useProducts();

  function AllProducts() {
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

  function AvailableProducts() {
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

  return filter ? <AvailableProducts /> : <AllProducts />;
}
