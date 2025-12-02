import { useEffect, useState } from "react";
import ProductContainer from "../components/ProductContainer";

export default function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("/products.json");
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return <>{products && <ProductContainer products={products} />}</>;
}
