import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  cy.visit("http://localhost:5173");
});

Given("The amount of products is 0", () => {
  cy.get("[data-cy=amount-of-products]").should("have.value", 0);
});

Given("The amount of products is 1", () => {
  cy.get("[data-cy=amount-of-products]").should("have.value", 1);
});

When("The increment button is clicked", () => {
  cy.get("[data-cy=increment-button]").click();
});

Then("The amount increases with 1", () => {
  cy.get("[data-cy=amount-of-products]").should("have.value", 1);
});

Then("The amount is equal to 2", () => {
  cy.get("[data-cy=amount-of-products]").should("have.value", 2);
});
