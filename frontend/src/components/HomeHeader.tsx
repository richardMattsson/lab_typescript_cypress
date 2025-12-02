import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <header className="home-header">
      <HomeTitle />
      <AccountIcon />
      <CartIcon />
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

export function CartIcon() {
  return (
    <Link className="link" to={"/cart"}>
      <img
        src="shopping_cart_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
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
