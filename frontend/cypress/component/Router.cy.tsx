import Router from "../../src/router/router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("Router.cy.jsx", () => {
  it("confirm order", () => {
    cy.mount(
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    );
    cy.get("[data-cy=product-container]").children().eq(0).click();
    cy.get("[data-cy=add-to-cart-button]").click();
    cy.get("[data-cy=shopping-cart]").click();
    cy.get("[data-cy=continue-order]").contains("Gå vidare").click();

    cy.get("[data-cy=name-input]").type("Richard");
    cy.get("[data-cy=address-input]").type("Some address");
    cy.get("[data-cy=date-input]").select("Saturday kl. 08-09");
    cy.get("[data-cy=radio-swish]").click();
  });
});
