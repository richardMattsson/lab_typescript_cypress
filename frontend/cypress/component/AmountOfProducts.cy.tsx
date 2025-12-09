import { AmountOfProducts } from "../../src/components/ProductContainer.tsx";

describe("AmountOfProducts.cy.jsx", () => {
  beforeEach(() => {
    cy.mount(<AmountOfProducts onIncrease={() => {}} onDecrease={() => {}} />);
  });

  it("decrement button should not affect amount when amount is 1", () => {
    cy.get('[data-cy="amount-of-products"]')
      .should("be.visible")
      .should("have.text", 1);
    cy.get("[data-cy=decrement-button]").should("be.visible").click();
    cy.get('[data-cy="amount-of-products"]').should("have.text", 1);
  });

  it("click decrement button decrements amount", () => {
    cy.get("[data-cy=increment-button]").click();
    cy.get('[data-cy="amount-of-products"]').should("have.text", 2);

    cy.get("[data-cy=decrement-button]").click();
    cy.get('[data-cy="amount-of-products"]').should("have.text", 1);
  });

  it("click increment button increases amount", () => {
    cy.get('[data-cy="amount-of-products"]').should("have.text", 1);

    cy.get("[data-cy=increment-button]").click();

    cy.get("[data-cy=increment-button]").click();

    cy.get("[data-cy=increment-button]").click();
    cy.get('[data-cy="amount-of-products"]').should("have.text", 4);
  });
});
