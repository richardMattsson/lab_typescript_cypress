import { Link } from "react-router-dom";
import type { ProductType } from "./ProductContainer";

type HomeHeaderProps = {
  cart: ProductType[] | null;
};

export default function HomeHeader({ cart }: HomeHeaderProps) {
  return (
    <header className="home-header">
      <Link className="link" to={"/"}>
        <h1>frukostbröd</h1>
      </Link>

      <Link className="link" to={"/cart"}>
        <img
          data-cy="shopping-cart"
          src={
            cart === null || cart.length === 0
              ? "/images/app/shopping_cart.svg"
              : "/images/app/add_shopping_cart.svg"
          }
          alt="shopping cart icon"
        />
      </Link>
    </header>
  );
}
