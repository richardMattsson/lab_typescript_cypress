describe("login", () => {
  it("back up db", () => {
    cy.backupDatabase();
  });

  it("success, login", () => {
    cy.visit("/#/login");

    cy.request("POST", "/api/register", {
      email: "test@mail.com",
      password: "password",
    });

    cy.get("[data-cy=email-input-login]").type("test@mail.com");
    cy.get("[data-cy=password-input-login]").type("password");

    cy.get("[data-cy=submit-login]").click();

    cy.location().should((location) =>
      expect(location.hash).to.eq("#/account")
    );
  });

  it("redirects to login if fail", () => {
    cy.visit("/#/account");
    cy.location().should((location) => {
      expect(location.hash).to.eq("#/login");
    });
  });
  it("restore db", () => {
    cy.restoreDatabase();
  });
});
