import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  const [someVariable] = useState(false);
  return (
    <header className="home-header">
      <HomeTitle />
      <AccountIcon />
      <CartIcon someVariable={someVariable} />
    </header>
  );
}

export function HomeTitle() {
  return (
    <Link className="link" to={"/"}>
      <h1>Some title</h1>
    </Link>
  );
}

export function CartIcon({ someVariable }: { someVariable: boolean }) {
  return (
    <Link className="link" to={"/cart"}>
      <img
        data-cy="shopping-cart"
        src={
          someVariable
            ? "shopping_cart_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            : "add_shopping_cart_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
        }
        alt="shopping cart icon"
      />
    </Link>
  );
}

export function AccountIcon() {
  return (
    <Link className="link" to={"/account"}>
      <img
        src="account_circle_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
        alt="account icon"
      />
    </Link>
  );
}
