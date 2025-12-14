import type { ProductType } from "../../src/components/ProductContainer.tsx";
import { updateCart } from "../../src/utils/cart.ts";

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
    const cart: ProductType[] | null = [];
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
    updateCart({ action: "add", cart, product });
  });

  it("adds quantity if product already exist in cart", () => {
    const cart = [defaultProduct];
    const product = defaultProduct;
    updateCart({ action: "add", cart, product });
  });

  it("adds the product if the cart is null", () => {
    const cart = null;
    const product = defaultProduct;
    updateCart({ action: "add", cart, product });
  });
});
