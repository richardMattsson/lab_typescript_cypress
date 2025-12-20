describe("login", () => {
  it("success, login", () => {
    cy.visit("/#/login");

    cy.get("[data-cy=email-input-login]").type("example@email.com");
    cy.get("[data-cy=password-input-login]").type("password");

    cy.get("[data-cy=submit-login]").click();

    cy.location().should((location) =>
      expect(location.hash).to.eq("#/account")
    );
    cy.contains("Tidigare ordrar");
  });

  it("redirects to login if fail", () => {
    cy.visit("/#/account");
    cy.location().should((location) => {
      expect(location.hash).to.eq("#/login");
    });
  });
});
