import ProductContainer from "../../src/components/ProductContainer.tsx";
import { defaultProduct } from "./updateCart-function.cy.tsx";

describe("ContainerForProducts.cy.jsx", () => {
  it("shows a product in shop", () => {
    cy.mount(
      <ProductContainer products={[defaultProduct]} updateCart={() => {}} />
    );
    cy.get("[data-cy=product-container]").should("be.visible");

    cy.get("[data-cy=product-container]").should("have.property", "length");
    cy.get("[data-cy=product-container]").should("have.length", 1);
  });
});
