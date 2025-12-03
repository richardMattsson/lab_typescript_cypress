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
      <Link className="link" to={"/account"}>
        <img
          src="account_circle_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          alt="account icon"
        />
      </Link>
      <Link className="link" to={"/cart"}>
        <img
          data-cy="shopping-cart"
          src={
            cart && cart.length === 0
              ? "shopping_cart.svg"
              : "add_shopping_cart.svg"
          }
          alt="shopping cart icon"
        />
      </Link>
    </header>
  );
}
