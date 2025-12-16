import { mockFailLoad } from "../support/commands.ts";

describe("Product container", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Product container shows some products", () => {
    cy.get("[data-cy=product-container]")
      .children()
      .should("exist")
      .and("be.visible");

    cy.get("[data-cy=product-container]").should("have.property", "length");

    cy.get("[data-cy=product-container]").should("have.length.at.least", 1);
  });

  it.only("error message if fail to load products", () => {
    mockFailLoad();
    cy.wait("@failLoad");
    cy.wait(5000);
    cy.get("[data-cy=main-container]").contains(
      "Något gick fel med att hämta produkter"
    );
  });

  it("shows message when cart is empty", () => {
    cy.get("[data-cy=shopping-cart]").click();
    cy.get("[data-cy=order-container]")
      .children()
      .eq(0)
      .contains("Varukorgen är tom.");
  });
});
