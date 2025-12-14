import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";

import type { ProductType } from "../components/ProductContainer";

import { updateCart } from "../utils/cart";

export type UpdateCartType = {
  action: "increase" | "decrease" | "increase by" | "add" | "update quantity";
  product: ProductType;
  quantity: number;
};

export default function Router() {
  const [cart, setCart] = useState<ProductType[] | null>(null);

  function handleUpdateCart({ action, product, quantity }: UpdateCartType) {
    const updatedCart = updateCart({ action, cart, product, quantity });
    setCart(updatedCart);
  }

  const router = createHashRouter([
    {
      element: (
        <>
          <HomeHeader cart={cart} />
          <main>
            <Outlet />
          </main>
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home updateCart={handleUpdateCart} />,
        },
        {
          path: "/cart",
          element: (
            <Cart
              cart={cart}
              setCart={() => setCart(null)}
              updateCart={handleUpdateCart}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
