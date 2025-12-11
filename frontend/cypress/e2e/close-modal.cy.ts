describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("[data-cy=product-container]").children().eq(0).click();
    cy.get("[data-cy=close-modal-icon]").click();
    cy.get("[data-cy=product-container]").should("have.property", "length");
  });
});
