import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import HomeHeader from "../components/HomeHeader";

export default function Router() {
  const router = createHashRouter([
    {
      element: (
        <>
          <HomeHeader />
          <main>
            <Outlet />
          </main>
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
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
