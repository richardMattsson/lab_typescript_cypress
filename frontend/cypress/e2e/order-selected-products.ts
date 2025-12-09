import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import { mockDataProducts } from "../support/commands.ts";

// beforeEach(() => {
//   mockDataProducts();
//   cy.visit("/");
//   cy.wait("@products");
// });

Given("I selected some product and went to the cart page", () => {
  cy.visit("/");
  cy.get("[data-cy=product-card]").eq(0).click();
  cy.get("[data-cy=add-to-cart-button]").click();
  cy.get("[data-cy=shopping-cart]").click();
  cy.location("href").should("equal", "http://localhost:5173/#/cart");
  cy.get("[data-cy=continue-order]").click();
});

When("I fill the form and make the order", () => {
  cy.get("[data-cy=name-input]").type("Richard");
  cy.get("[data-cy=address-input]").type("Some address");
  cy.get("[data-cy=date-input]").type("2025-12-31");
  cy.get("[data-cy=make-order]").click();
});

Then("I should see my selected products in the order confirmation", () => {
  cy.get("[data-cy=order-confirmation]")
    .children()
    .eq(0)
    .contains("Fralla Naturell")
    .should("be.visible");
});
