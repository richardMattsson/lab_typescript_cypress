import { mockData } from "../support/commands.ts";
describe("Product container", () => {
  it("Product container shows some products", () => {
    mockData();
    cy.visit("/");
    cy.wait("@products");
    cy.get("[data-cy=product-container]")
      .children()
      .should("exist")
      .and("be.visible");

    cy.get("[data-cy=product-container]").should("have.property", "length");

    cy.get("[data-cy=product-container]").should("have.length.at.least", 1);
  });
});
