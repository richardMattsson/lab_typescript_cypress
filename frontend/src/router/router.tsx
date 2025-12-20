import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import HomeHeader from "../components/HomeHeader";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useState } from "react";

import type { ProductType } from "../components/ProductContainer";

import { updateCart } from "../utils/cart";

export type UpdateCartType = {
  action:
    | "increase"
    | "decrease"
    | "increase by"
    | "add"
    | "update quantity"
    | "delete";
  product: ProductType;
  quantity?: number;
};

export default function Router() {
  const [cart, setCart] = useState<ProductType[] | null>(null);

  function handleUpdateCart({ action, product, quantity = 1 }: UpdateCartType) {
    const updatedCart = updateCart({ action, cart, product, quantity });
    setCart(updatedCart);
  }

  const router = createHashRouter([
    {
      element: (
        <>
          <HomeHeader cart={cart} />
          <main data-cy="main-container">
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
          path: "/account/",
          element: <Account />,
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
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
