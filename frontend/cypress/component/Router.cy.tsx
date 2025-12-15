import Router from "../../src/router/router.tsx";

beforeEach(() => {
  cy.mount(<Router />);
});

describe("Router.cy.jsx", () => {
  it("add a product", () => {
    cy.get("[data-cy=product-container]").children().eq(0).click();
    cy.get("[data-cy=add-to-cart-button]").click();
  });

  it("confirm order", () => {
    cy.get("[data-cy=product-container]").children().eq(0).click();
    cy.get("[data-cy=add-to-cart-button]").click();
    cy.get("[data-cy=shopping-cart]").click();
    cy.get("[data-cy=continue-order]").contains("Gå vidare").click();

    cy.get("[data-cy=name-input]").type("Richard");
    cy.get("[data-cy=address-input]").type("Some address");
    cy.get("[data-cy=date-input]").type("2025-12-31");

    cy.get("[data-cy=make-order]").click();
  });

  it("restores db", () => {
    cy.resetDatabase();
  });
});
