import UserOrders from "../../src/components/UserOrders";
describe("UserOrders.cy.jsx", () => {
  it("shows a list of previous orders", () => {
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

    cy.get("data-cy=order-history-list")
      .first()
      .should("have.text", "Fralla Naturell");
    cy.get("data-cy=order-history-list")
      .last()
      .should("have.text", "Fralla Sesam");
  });
});
