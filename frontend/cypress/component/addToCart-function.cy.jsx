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

describe("addToCart-function.cy.jsx", () => {
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
