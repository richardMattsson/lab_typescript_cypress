import type { ProductType } from "../components/ProductContainer";

type CartProps = {
  cart: ProductType[] | null;
};

export default function Cart({ cart }: CartProps) {
  return (
    <>
      <article data-cy="order-container">
        {cart && cart.map((product) => <OrderCard product={product} />)}
      </article>
    </>
  );
}

export function OrderCard({ product }: { product: ProductType }) {
  return (
    <>
      {product && (
        <section data-cy="order-card">
          <p>{product.name}</p>
          <p>{product.price} kr</p>
        </section>
      )}
    </>
  );
}
