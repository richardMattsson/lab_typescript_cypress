describe("Product container", () => {
  it("Product container shows some products", () => {
    cy.visit("/");
    cy.get("[data-cy=product-container]")
      .children()
      .should("exist")
      .and("be.visible");
  });
});
