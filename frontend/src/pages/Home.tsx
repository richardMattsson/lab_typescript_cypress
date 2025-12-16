// import { useEffect, useState } from "react";
// import { useState } from "react";
import ProductContainer from "../components/ProductContainer";
import type { UpdateCartType } from "../router/router";
import { useQuery } from "@tanstack/react-query";

type HomeProps = {
  updateCart: ({ action, product }: UpdateCartType) => void;
};

export default function Home({ updateCart }: HomeProps) {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/api/products").then((result) => result.json()),
  });

  // const [products] = useState(data || null);
  // console.log(products);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   async function getProducts() {
  //     try {
  //       const response = await fetch("/api/products");
  //       const result = await response.json();
  //       setProducts(result);
  //     } catch (error) {
  //       console.log(error);
  //       setError("Kunde inte ladda produkter. Försök igen senare.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getProducts();
  // }, []);

  return (
    <>
      {error && <p>Något gick fel med att hämta produkter</p>}
      {isPending && <p>Laddar produkter...</p>}
      {data && <ProductContainer updateCart={updateCart} products={data} />}
    </>
  );
}
