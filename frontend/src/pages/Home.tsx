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

  return (
    <>
      {isPending && <p>Laddar produkter...</p>}
      {data && <ProductContainer updateCart={updateCart} products={data} />}
      {error && <p>Något gick fel med att hämta produkter</p>}
    </>
  );
}
