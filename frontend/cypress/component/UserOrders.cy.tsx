import type { OrderType } from "../../src/pages/Cart.tsx";
import UserOrders, { OrderItem } from "../../src/components/UserOrders.tsx";
import type { ProductType } from "../../src/components/ProductContainer.tsx";

const cart: Pick<ProductType, "name" | "price" | "quantity">[] = [
  { name: "Fralla Naturell", price: 8, quantity: 4 },
  { name: "Fralla Sesam", price: 9, quantity: 4 },
];

const orders: OrderType[] = [
  {
    id: 1,
    name: "Richard Mattsson",
    address: "Kollagatan 2",
    cart: cart,
    created_at: "2025-12-18 12:16:29.737133",
    price: 80,
    delivery: "Lördag kl. 08-09",
  },
  {
    id: 2,
    name: "Richard",
    address: "Kollagatan 2",
    cart: cart,
    created_at: "2025-12-11 12:16:29.737133",
    price: 80,
    delivery: "Lördag kl. 08-09",
  },
];

describe("UserOrders.cy.jsx", () => {
  it("shows a list of previous orders", () => {
    cy.mount(<UserOrders orders={orders} />);

    cy.get("[data-cy=order-history-list]")
      .children()
      .eq(0)
      .should("have.text", "2025-12-18 12:16:29");
    cy.get("[data-cy=order-history-list]")
      .children()
      .eq(1)
      .should("have.text", "2025-12-11 12:16:29");
  });

  it("show previuos orders with an OrderItemComponent", () => {
    cy.mount(<UserOrders orders={orders} />);

    cy.get("[data-cy=order-item]");
  });

  it("show previuos orders with an OrderItemComponent", () => {
    cy.mount(<UserOrders orders={[]} />);

    cy.window().contains("Du har inga tidigare ordrar.");
  });

  it("shows correct amount of orders", () => {
    cy.mount(<UserOrders orders={orders} />);

    cy.get("[data-cy=order-history-list]").children().should("have.length", 2);
  });

  it("calls onClick with order id when clicked", () => {
    const onClick = cy.spy().as("orderClick");
    cy.mount(<OrderItem order={orders[0]} onClick={onClick} />);

    cy.get("[data-cy=order-item]").eq(0).click();
    // cy.get("[data-cy=order-item]").should("have.been.calledWith", "1");

    cy.get("@orderClick").should("have.been.calledWith", 1);
  });
});
