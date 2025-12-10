import Router from "../../src/router/router";
import { addToCart } from "../../src/utils/cart";

const defaultProduct = {
  id: 1,
  name: "Fralla Naturell",
  category: "frallor",
  description:
    "Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.",
  price: 8,
  image: "/images/fralla-naturell.jpg",
  quantity: 1,
};

describe("Router.cy.jsx", () => {
  it("add a product", () => {
    cy.mount(<Router />);
    cy.get("[data-cy=product-container]").children().eq(0).click();
    cy.get("[data-cy=add-to-cart-button]").click();
  });

  it("confirm order", () => {
    cy.mount(<Router />);
    cy.get("[data-cy=product-container]").children().eq(0).click();
    cy.get("[data-cy=add-to-cart-button]").click();
    cy.get("[data-cy=shopping-cart]").click();
    cy.get("[data-cy=continue-order]").contains("Gå vidare").click();

    cy.get("[data-cy=name-input]").type("Richard");
    cy.get("[data-cy=address-input]").type("Some address");
    cy.get("[data-cy=date-input]").type("2025-12-31");

    cy.get("[data-cy=make-order]").click();
  });

  it("adds a product", () => {
    const cart = [];
    const product = {
      id: 1,
      name: "Fralla Naturell",
      category: "frallor",
      description:
        "Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.",
      price: 8,
      image: "/images/fralla-naturell.jpg",
      quantity: 1,
    };
    const result = addToCart(cart, product);
  });

  it("adds quantity if product already exist in cart", () => {
    const cart = [defaultProduct];
    const product = defaultProduct;
    const result = addToCart(cart, product);
  });

  it("adds the product if the cart is null", () => {
    const cart = null;
    const product = defaultProduct;
    const result = addToCart(cart, product);
  });
});
