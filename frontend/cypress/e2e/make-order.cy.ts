describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // To make an order the user first must choose one product and add it to cart.

  it("add one product to cart", function () {
    cy.get("[data-cy=product-card]").eq(0).click();
    cy.get("[data-cy=add-to-cart-button]").click();
  });

  // Going to the cart.

  it("go to cart", function () {
    cy.get("[data-cy=shopping-cart]").click();
    cy.location("href").should("equal", "http://localhost:5173/#/cart");
  });

  // Clicking continue order.

  it("continue with order ", function () {
    cy.get("[data-cy=continue-order]").click();
  });
});
