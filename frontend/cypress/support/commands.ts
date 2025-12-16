/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {

//   namespace Cypress {
//     interface Chainable {

//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("resetDatabase", () => {
  const PGURI = Cypress.env("PGURI");
  if (PGURI) {
    try {
      cy.exec(`psql -f init.sql ${PGURI}`);
    } catch (error) {
      console.log(error);
    }
  }
});

Cypress.Commands.add("backupDatabase", () => {
  const PGURI = Cypress.env("PGURI");
  try {
    cy.exec(`pg_dump -f backup.sql ${PGURI}`);
  } catch (error) {
    console.log(error);
  }
});

Cypress.Commands.add("restoreDatabase", () => {
  const PGURI = Cypress.env("PGURI");
  const DB_NAME = Cypress.env("DB_NAME");
  if (PGURI && DB_NAME) {
    try {
      cy.exec(`psql ${PGURI} -f resetdb.sql`);
      cy.exec(`psql ${PGURI} -f backup.sql`);
    } catch (error) {
      console.log(error);
    }
  }
});

import "../../src/setup.js";

export const mockFailLoad = () => {
  return cy
    .intercept("/api/products", {
      statusCode: 500,
    })
    .as("failLoad");
};
