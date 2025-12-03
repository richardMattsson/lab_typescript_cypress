import type { ProductType } from "../components/ProductContainer";

type CartProps = {
  cart: ProductType[] | null;
};

export default function Cart({ cart }: CartProps) {
  return (
    <>
      <article data-cy="order-container">
        {cart &&
          cart.map((product) => (
            <OrderCard key={product.id} product={product} />
          ))}
        {cart && (
          <p className="text-align-end">
            Total: {cart.reduce((acc, cur) => acc + cur.price, 0)} kr
          </p>
        )}
        <section data-cy="continue-order"></section>
      </article>
    </>
  );
}

export function OrderCard({ product }: { product: ProductType }) {
  return (
    <>
      {product && (
        <section className="order-card" data-cy="order-card">
          <span>{product.name}</span>
          <span>{product.price} kr</span>
        </section>
      )}
    </>
  );
}
