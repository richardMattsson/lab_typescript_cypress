import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(
  "I have choosen a product, clicked continue with order and filled in all info correct",
  () => {
    cy.visit("/");
    cy.get("[data-cy=product-card]").eq(0).click();
    cy.get("[data-cy=add-to-cart-button]").click();
    cy.get("[data-cy=shopping-cart]").click();
    cy.location("href").should("equal", "http://localhost:5173/#/cart");
    cy.get("[data-cy=continue-order]").contains("Gå vidare").click();

    // Fill form
    cy.get("[data-cy=name-input]").type("Richard");
    cy.get("[data-cy=address-input]").type("Some address");
    cy.get("[data-cy=date-input]").type("Some date");
  }
);

When("I click the make order button", () => {
  cy.get("make-order").click();
});

Then("I should get a confirmation about that my order was successfull", () => {
  cy.get("confirmation-order").should(
    "have.text",
    "Du har gjort en beställning!"
  );
});
