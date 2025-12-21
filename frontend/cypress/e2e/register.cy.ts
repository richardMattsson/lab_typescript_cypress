describe("register page", () => {
  beforeEach(() => {
    cy.visit("/#/register");
  });

  it("backup db", () => {
    cy.backupDatabase();
  });

  it("succefull register", () => {
    cy.get("[data-cy=email-input-register]").type("name@host.com");
    cy.get("[data-cy=password-input-register]").type("password");

    cy.get("[data-cy=submit-register]").click();
  });

  it("cancel if user already exist", () => {
    cy.get("[data-cy=email-input-register]").type("name@host.com");
    cy.get("[data-cy=password-input-register]").type("password");

    cy.get("[data-cy=submit-register]").click();

    cy.get("[data-cy=errorMsg-register]").contains(
      "Angiven email finns redan som användare."
    );
  });

  it("restore db", () => {
    cy.restoreDatabase();
  });
});
