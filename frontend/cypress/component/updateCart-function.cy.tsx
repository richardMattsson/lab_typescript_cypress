import type { ProductType } from "../../src/components/ProductContainer.tsx";
import { updateCart } from "../../src/utils/cart.ts";

export const defaultProduct = {
  id: 1,
  name: "Fralla Naturell",
  category: "frallor",
  description:
    "Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.",
  price: 8,
  image: "/images/fralla-naturell.jpg",
  quantity: 1,
};

describe("updateCart function", () => {
  it("adds a product", () => {
    const cart: ProductType[] | null = [];
    const product = defaultProduct;
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

  it("Increases quantity", () => {
    const action = "increase";
    const cart = [defaultProduct];
    const product = defaultProduct;
    updateCart({ action, cart, product });
  });

  it("decreases quantity", () => {
    const action = "decrease";
    const cart = [defaultProduct];
    const product = defaultProduct;
    updateCart({ action, cart, product });
  });

  it("adds product with a set quantity", () => {
    const action = "increase by";
    const cart = [defaultProduct];
    const product = { ...defaultProduct, quantity: 4 };
    updateCart({ action, cart, product });
  });

  it("update product quantity with a number", () => {
    const action = "update quantity";
    const cart = [defaultProduct];
    const product = defaultProduct;
    const quantity = 10;
    updateCart({ action, cart, product, quantity });
  });
});
