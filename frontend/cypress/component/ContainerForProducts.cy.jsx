import { ProductCard } from "../../src/App";

describe("ContainerForProducts.cy.jsx", () => {
  it("playground", () => {
    cy.mount(<ProductCard />);
    cy.get("[data-cy=product-card]")
      .should("be.visible")
      .should("have.class", "product-card")
      .should("have.css", "border")
      .and("equal", "1px solid rgb(0, 0, 0)");
  });
});
