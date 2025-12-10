import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";

import type { ProductType } from "../components/ProductContainer";

import { addToCart } from "../utils/cart";

export default function Router() {
  const [cart, setCart] = useState<ProductType[] | null>(null);

  function handleAdd(product: ProductType) {
    const updatedCart = addToCart(cart, product);
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
          element: <Home addToCart={handleAdd} />,
        },
        {
          path: "/cart",
          element: <Cart cart={cart} setCart={() => setCart(null)} />,
        },
        {
          path: "/account",
          element: <Account />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
