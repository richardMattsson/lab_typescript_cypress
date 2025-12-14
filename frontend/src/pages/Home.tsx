import { useEffect, useState } from "react";
import ProductContainer from "../components/ProductContainer";
import type { UpdateCartType } from "../router/router";

type HomeProps = {
  updateCart: ({ action, product }: UpdateCartType) => void;
};

export default function Home({ updateCart }: HomeProps) {
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
        <ProductContainer updateCart={updateCart} products={products} />
      )}
    </>
  );
}
