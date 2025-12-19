import type { ProductType } from "./ProductContainer";

type UserOrdersProps = {
  orders: ProductType[];
};

export default function UserOrders({ orders }: UserOrdersProps) {
  return (
    <ul data-cy="order-history-list">
      {orders.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
