import type { ProductType } from "../components/ProductContainer";

export const addToCart = (cart: ProductType[] | null, product: ProductType) => {
  if (cart) {
    const productExistInCart = cart.some((item) => item.id === product.id);

    if (!productExistInCart) {
      return [...(cart || []), product];
    } else {
      const quantity = cart.reduce(
        (acc, cur) => (cur.id === product.id ? acc + cur.quantity : acc),
        product.quantity
      );

      return cart.map((item) =>
        item.id === product.id ? { ...item, quantity: quantity } : item
      );
    }
  } else return [...(cart || []), product];
};

export const updateCart = (
  action: "increase" | "decrease",
  cart: ProductType[] | null,
  product: ProductType
) => {
  if (cart) {
    if (action === "increase") {
      return cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: product.quantity + 1 }
          : item
      );
    } else if (action === "decrease") {
      return cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity:
                product.quantity > 0 ? product.quantity - 1 : product.quantity,
            }
          : item
      );
    }
    return cart;
  } else return [...(cart || []), product];
};
