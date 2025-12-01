import { AmountOfProducts } from "../../src/App";

describe("AmountOfProducts.cy.jsx", () => {
  beforeEach(() => {
    cy.mount(<AmountOfProducts />);
  });
  it("click increment button increases amount", () => {
    cy.get('[data-cy="amount-of-products"]')
      .should("be.visible")
      .should("have.text", 0);

    cy.get("[data-cy=increment-button]").should("be.visible").click();
    cy.get('[data-cy="amount-of-products"]')
      .should("be.visible")
      .should("have.text", 1);
    cy.get("[data-cy=increment-button]").should("be.visible").click();
    cy.get('[data-cy="amount-of-products"]')
      .should("be.visible")
      .should("have.text", 2);
  });

  it("click decrement button decrements amount", () => {
    cy.get("[data-cy=increment-button]").should("be.visible").click();
    cy.get('[data-cy="amount-of-products"]')
      .should("be.visible")
      .should("have.text", 1);

    cy.get("[data-cy=decrement-button]").should("be.visible").click();
    cy.get('[data-cy="amount-of-products"]')
      .should("be.visible")
      .should("have.text", 1);
  });
});
