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

describe("updateCart function", () => {
  it("Increases quantity", () => {
    const action = "increase";
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
    updateCart(action, cart, product);
  });

  it("decreases quantity", () => {
    const action = "decrease";
    const cart = [defaultProduct];
    const product = defaultProduct;
    updateCart(action, cart, product);
  });
});
