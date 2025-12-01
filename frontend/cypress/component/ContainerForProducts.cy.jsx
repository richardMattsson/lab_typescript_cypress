import { ContainerForProducts } from "../../src/App";

describe("ContainerForProducts.cy.jsx", () => {
  it("playground", () => {
    cy.mount(<ContainerForProducts />);
    cy.get("[data-cy=container-products]")
      .should("have.class", "container-for-products")
      .should("have.css", "border");
  });
});
