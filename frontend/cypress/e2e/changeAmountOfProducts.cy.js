describe("change amount of products work", () => {
  it("increases amount", () => {
    cy.visit("/");
    cy.get("[data-cy=product-container]").children().eq(0).click();
    cy.get("[data-cy=increment-button]").click();
    cy.get("[data-cy=amount-of-products]").contains(2);
  });
  it("decreases amount", () => {
    cy.visit("/");
    cy.get("[data-cy=product-container]").children().eq(0).click();
    cy.get("[data-cy=increment-button]").click();
    cy.get("[data-cy=increment-button]").click();
    cy.get("[data-cy=amount-of-products]").contains(3);

    cy.get("[data-cy=decrement-button]").click();
    cy.get("[data-cy=amount-of-products]").contains(2);
  });
});
