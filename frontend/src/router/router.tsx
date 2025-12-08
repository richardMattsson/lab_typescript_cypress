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
    console.log(product);
    const existingProduct = cart?.some((item) => item.id === product.id);
    if (existingProduct) {
      const quantity = cart?.reduce((acc, cur) => acc + cur.quantity, 0);

      console.log(quantity);
      const newProduct = product;
      if (quantity) {
        newProduct.quantity += quantity;
      }
      const updatedArray = cart?.filter((item) => item.id !== product.id);
      updatedArray?.push(newProduct);
      if (updatedArray) {
        setCart(updatedArray);
      }
    } else {
      setCart((prev) => [...(prev || []), product]);
    }
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
