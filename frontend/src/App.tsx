import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <AmountOfProducts />
    </>
  );
}

export function AmountOfProducts() {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <button
        data-cy="decrement-button"
        onClick={() => setAmount(amount > 0 ? amount - 1 : amount)}
      >
        -
      </button>
      <span data-cy="amount-of-products">{amount}</span>
      <button data-cy="increment-button" onClick={() => setAmount(amount + 1)}>
        +
      </button>
    </>
  );
}

export default App;
