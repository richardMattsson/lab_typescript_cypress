import type { ProductType } from "../../src/components/ProductContainer.tsx";
import UserOrders from "../../src/components/UserOrders.tsx";

describe("UserOrders.cy.jsx", () => {
  it("shows a list of previous orders", () => {
    const orders: ProductType[] = [
      {
        id: 1,
        name: "Fralla Naturell",
        category: "frallor",
        description:
          "Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.",
        price: 8,
        image: "/images/fralla-naturell.jpg",
        quantity: 4,
      },
      {
        id: 2,
        name: "Fralla Sesam",
        category: "frallor",
        description:
          "Mjuk fralla toppad med sesamfrön. Mild smak och krispig yta.",
        price: 9,
        image: "/images/products/fralla-sesam.png",
        quantity: 4,
      },
    ];

    cy.mount(<UserOrders orders={orders} />);

    cy.get("[data-cy=order-history-list]")
      .children()
      .eq(0)
      .should("have.text", "Fralla Naturell");
    cy.get("[data-cy=order-history-list]")
      .children()
      .eq(1)
      .should("have.text", "Fralla Sesam");
  });

  it("show previuos orders with a OrderItemComponent", () => {
    const orders = [
      {
        id: 1,
        name: "Fralla Naturell",
        category: "frallor",
        description:
          "Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.",
        price: 8,
        image: "/images/fralla-naturell.jpg",
        quantity: 4,
      },
    ];
    cy.mount(<UserOrders orders={orders} />);

    cy.get("[data-cy=order-item]");
  });
});
