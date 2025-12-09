import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { mockDataProducts } from "../support/commands.ts";

beforeEach(() => {
  mockDataProducts();
  cy.visit("/");
  cy.wait("@products");
});

Given(
  "I have choosen a product, clicked continue with order and filled in all info correct",
  () => {
    cy.get("[data-cy=product-card]").eq(0).click();
    cy.get("[data-cy=add-to-cart-button]").click();
    cy.get("[data-cy=shopping-cart]").click();
    cy.location("href").should("equal", "http://localhost:5173/#/cart");
    cy.get("[data-cy=continue-order]").contains("Gå vidare").click();

    // Form
    cy.get("[data-cy=name-input]").type("Richard");
    cy.get("[data-cy=address-input]").type("Some address");
    cy.get("[data-cy=date-input]").type("2025-12-31");
  }
);

When("I click the make order button", () => {
  cy.get("[data-cy=make-order]").click();
});

Then("I should get a confirmation about that my order was successfull", () => {
  cy.get("[data-cy=confirmation-message]").should("be.visible");
});
