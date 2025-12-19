import type { OrderType } from "../pages/Cart";

type UserOrdersProps = {
  orders: OrderType[];
};

export default function UserOrders({ orders }: UserOrdersProps) {
  return (
    <>
      {orders && (
        <ul data-cy="order-history-list">
          {orders.map((item) => (
            <OrderItem key={item.id} order={item} onClick={() => onclick} />
          ))}
        </ul>
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
    <li data-cy="order-item" onClick={() => onClick(order.id)}>
      <span>{order.created_at.split(".")[0]}</span>
    </li>
  );
}
