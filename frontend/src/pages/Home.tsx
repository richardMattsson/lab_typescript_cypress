import { useEffect, useState } from "react";
import ProductContainer from "../components/ProductContainer";
import type { ProductType } from "../components/ProductContainer";

type HomeProps = {
  addToCart: (product: ProductType) => void;
};

export default function Home({ addToCart }: HomeProps) {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("/api/products");
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      {products && (
        <ProductContainer addToCart={addToCart} products={products} />
      )}
    </>
  );
}
