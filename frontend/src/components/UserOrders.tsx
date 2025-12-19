import type { ProductType } from "./ProductContainer";

type UserOrdersProps = {
  orders: ProductType[];
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
  order: ProductType;
};

export function OrderItem({ order }: OrderItemProps) {
  return (
    <li data-cy="order-item">
      <img src={order.image} alt={order.name} />
      <span>{order.name}</span>
    </li>
  );
}
