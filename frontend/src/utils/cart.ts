import type { ProductType } from "../components/ProductContainer";
import type { UpdateCartType } from "../router/router";

type UpdateCartFunctionType = UpdateCartType & {
  cart: ProductType[] | null;
};

export const updateCart = ({
  action,
  cart,
  product,
  quantity,
}: UpdateCartFunctionType) => {
  if (cart) {
    switch (action) {
      case "increase":
        return cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity && product.quantity + 1 }
            : item
        );

      case "decrease":
        return cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  product.quantity && product.quantity > 0
                    ? product.quantity - 1
                    : product.quantity,
              }
            : item
        );

      case "increase by":
        return cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  product.quantity &&
                  item.quantity &&
                  product.quantity + item.quantity,
              }
            : item
        );

      case "update quantity":
        return cart.map((item) =>
          item.id === product.id ? { ...item, quantity: quantity } : item
        );

      case "add": {
        const productExistInCart = cart.some((item) => item.id === product.id);

        if (!productExistInCart) {
          return [...(cart || []), product];
        } else {
          const quantity = cart.reduce(
            (acc, cur) =>
              acc && cur.quantity && cur.id === product.id
                ? acc + cur.quantity
                : acc,
            product.quantity
          );

          return cart.map((item) =>
            item.id === product.id ? { ...item, quantity: quantity } : item
          );
        }
      }

      default:
        return cart;
    }
  } else return [...(cart || []), product];
};
