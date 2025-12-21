import type { OrderType } from "../pages/Cart";

type UserOrdersProps = {
  orders: OrderType[];
  onClick: (id: number) => void;
};

export default function UserOrders({ orders, onClick }: UserOrdersProps) {
  return (
    <>
      {orders && (
        <>
          <section data-cy="order-history-list" style={{ display: "grid" }}>
            {orders.map((item) => (
              <OrderItem key={item.id} order={item} onClick={onClick} />
            ))}
          </section>
        </>
      )}
      {orders && orders.length <= 0 && <p>Du har inga tidigare ordrar.</p>}
    </>
  );
}

type OrderItemProps = {
  order: OrderType;
  onClick: (id: number) => void;
};

export function OrderItem({ order, onClick }: OrderItemProps) {
  return (
    <>
      <span>Antal varor: {order.cart.length}</span>
      <span>Pris totalt: {order.price} kr</span>
      <button
        className="pointer"
        data-cy="order-item"
        onClick={() => onClick(order.id)}
      >
        {order.created_at.split(".")[0]}
      </button>
    </>
  );
}
