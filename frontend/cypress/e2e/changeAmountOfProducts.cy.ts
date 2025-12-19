beforeEach(() => {
  cy.visit("/");
});

describe("change amount of products work", () => {
  it("increases amount", () => {
    cy.get("[data-cy=product-container]").children().eq(0).click();
    cy.get("[data-cy=increment-button]").click();
    cy.get("[data-cy=amount-of-products]").contains(2);
  });
  it("decreases amount", () => {
    cy.get("[data-cy=product-container]").children().eq(0).click();
    cy.get("[data-cy=increment-button]").click();
    cy.get("[data-cy=increment-button]").click();
    cy.get("[data-cy=amount-of-products]").contains(3);

    cy.get("[data-cy=decrement-button]").click();
    cy.get("[data-cy=amount-of-products]").contains(2);
  });

  it("deletes a product from cart", () => {
    cy.get("[data-cy=product-card]").eq(0).click();
    cy.get("[data-cy=add-to-cart-button]").click();

    cy.get("[data-cy=product-card]").eq(1).click();
    cy.get("[data-cy=add-to-cart-button]").click();

    cy.get("[data-cy=product-card]").eq(2).click();
    cy.get("[data-cy=add-to-cart-button]").click();
    cy.get("[data-cy=shopping-cart]").click();

    cy.get("[data-cy=order-card-1]").should("exist");
    cy.get("[data-cy=order-card-2]").should("exist");
    cy.get("[data-cy=order-card-3]").should("exist");

    cy.get("[data-cy=delete-icon-2]").should("exist").click();

    cy.get("[data-cy=order-card-2]").should("not.exist");
  });
});
