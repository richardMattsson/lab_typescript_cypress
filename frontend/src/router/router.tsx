import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";

import type { ProductType } from "../components/ProductContainer";

export default function Router() {
  const [cart, setCart] = useState<ProductType[] | null>(null);

  const addToCart = (product: ProductType) => {
    if (cart) {
      const productExistInCart = cart.some((item) => item.id === product.id);

      if (!productExistInCart) {
        setCart((prev) => [...(prev || []), product]);
      } else {
        const quantity = cart.reduce(
          (acc, cur) => (cur.id === product.id ? acc + cur.quantity : acc),
          product.quantity
        );
        const updatedProduct = product;
        updatedProduct.quantity = quantity;
        const updatedArray = cart.filter((item) => item.id !== product.id);
        updatedArray.push(updatedProduct);
        setCart(updatedArray);
      }
    } else setCart((prev) => [...(prev || []), product]);
  };

  const removeCart = () => {
    setCart(null);
  };

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
          element: <Home addToCart={addToCart} />,
        },
        {
          path: "/cart",
          element: <Cart cart={cart} setCart={removeCart} />,
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
