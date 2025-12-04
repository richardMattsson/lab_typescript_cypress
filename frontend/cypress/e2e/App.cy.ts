import { mockData } from "../support/commands.ts";

describe("template spec", () => {
  it("passes", () => {
    cy.resetDatabase();
    mockData();
    cy.visit("/");
    cy.wait("@products");
  });
});
