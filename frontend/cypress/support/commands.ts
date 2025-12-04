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
import { PGURI } from "../../db.ts";

Cypress.Commands.add("resetDatabase", () => {
  cy.exec(`psql -f init.sql ${PGURI}`);
});

import "../../src/setup.js";

export const mockData = () => {
  return cy
    .intercept("/api/products", {
      body: [
        {
          id: 1,
          name: "Fralla Naturell",
          category: "frallor",
          description:
            "Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.",
          price: 8,
          image: "/images/fralla-naturell.jpg",
        },
        {
          id: 2,
          name: "Fralla Sesam",
          category: "frallor",
          description:
            "Mjuk fralla toppad med sesamfrön. Mild smak och krispig yta.",
          price: 9,
          image: "/images/fralla-sesam.jpg",
        },
        {
          id: 3,
          name: "Baguette Klassisk",
          category: "baguetter",
          description:
            "Fransk baguette med spröd skorpa och mjukt inre. Perfekt som tillbehör eller smörgås.",
          price: 18,
          image: "/images/baguette-classic.jpg",
        },
      ],
    })
    .as("products");
};
