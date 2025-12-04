import { mockDataProducts } from "../support/commands.ts";

describe("template spec", () => {
  it("passes", () => {
    // cy.resetDatabase();
    mockDataProducts();
    cy.visit("/");
    cy.wait("@products");
  });
});
