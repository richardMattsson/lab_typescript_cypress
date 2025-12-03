describe("Product to cart", () => {
  it("Possible to add product to cart", () => {
    cy.visit("/");
    cy.get("[data-cy=product-container]")
      .children()
      .should(($item) => {
        $item.first().click();
      });
    cy.get("[data-cy=add-to-cart-button]").click();
    cy.get("[data-cy=shopping-cart]")
      .should("have.attr", "src")
      .and("includes", "add_shopping_cart");

    cy.get("[data-cy=shopping-cart]").click();
    cy.location("href").should("equal", "http://localhost:5173/#/cart");

    cy.get("[data-cy=order-container]").should("exist");
    cy.get("[data-cy=order-card]").should("exist");
  });
});
