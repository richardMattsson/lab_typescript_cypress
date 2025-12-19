import type { OrderType } from "../pages/Cart";

type UserOrdersProps = {
  orders: OrderType[];
};

export default function UserOrders({ orders }: UserOrdersProps) {
  return (
    <ul data-cy="order-history-list">
      {orders.map((item) => (
        <OrderItem key={item.id} order={item} />
      ))}
    </ul>
  );
}

type OrderItemProps = {
  order: OrderType;
};

export function OrderItem({ order }: OrderItemProps) {
  return (
    <li data-cy="order-item">
      <span>{order.created_at.split(".")[0]}</span>
    </li>
  );
}
