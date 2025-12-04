import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {
  // mockDataOrderProducts,
  mockDataProducts,
} from "../support/commands.ts";

Given("I selected some product and made an order", () => {
  mockDataProducts();
  cy.visit("/");
  cy.wait("@products");
  cy.get("[data-cy=product-card]").eq(0).click();
  cy.get("[data-cy=add-to-cart-button]").click();
  cy.get("[data-cy=shopping-cart]").click();
  cy.location("href").should("equal", "http://localhost:5173/#/cart");
  cy.get("[data-cy=continue-order]").contains("Gå vidare").click();

  // Form
  cy.get("[data-cy=name-input]").type("Richard");
  cy.get("[data-cy=address-input]").type("Some address");
  cy.get("[data-cy=date-input]").type("2025-12-31");
  cy.get("[data-cy=make-order]").click();

  // mockDataOrderProducts();
  // cy.wait("@orderProducts");
});

When("I click on my order on the cart page", () => {
  cy.get("[data-cy=order-confirmation]").click();
});

Then("I should see my selected products in the order confirmation", () => {
  cy.get("[data-cy=order-confirmation]").should("exist");
});
