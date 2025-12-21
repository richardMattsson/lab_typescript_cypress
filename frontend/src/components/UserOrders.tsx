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
          <section
            data-cy="order-history-list"
            style={{ display: "grid", gap: "40px" }}
          >
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
    <section style={{ display: "grid" }}>
      <div style={{ marginBottom: "10px" }}>
        <span>{order.created_at.split(".")[0].split("T")[0]}</span>
        <span>{` kl. ${order.created_at.split(".")[0].split("T")[1]}`}</span>
      </div>
      <button
        className="create-user-button pointer"
        data-cy="order-item"
        onClick={() => onClick(order.id)}
      >
        Visa order
      </button>
    </section>
  );
}
