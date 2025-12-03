import { useMemo, useState } from "react";
import type { ProductType } from "../components/ProductContainer";

type CartProps = {
  cart: ProductType[] | null;
};

export default function Cart({ cart }: CartProps) {
  const [openForm, setOpenForm] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  const totalPrice = useMemo(() => {
    if (!cart) return 0;
    return cart.reduce((acc, cur) => acc + cur.price, 0);
  }, [cart]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenForm(false);
    setConfirmationMessage(true);
  };

  return (
    <>
      <article data-cy="order-container">
        {!cart && <p>Din varukorg är tom.</p>}
        {cart &&
          cart.map((product) => (
            <OrderCard key={product.id} product={product} />
          ))}

        {cart && <p className="text-align-end">Total: {totalPrice} kr</p>}

        {cart && (
          <section
            className="pointer underscore"
            onClick={() => setOpenForm(true)}
            data-cy="continue-order"
          >
            Gå vidare
          </section>
        )}

        {openForm && (
          <OrderModal
            onClose={() => setOpenForm(false)}
            onSubmit={onSubmit}
            totalPrice={totalPrice}
          />
        )}

        {confirmationMessage && (
          <p data-cy="confirmation-message">Du har lagt en beställning!</p>
        )}
      </article>
    </>
  );
}

export function OrderCard({ product }: { product: ProductType }) {
  return (
    <>
      {product && (
        <section className="order-card" data-cy="order-card">
          <span>{product.name}</span>
          <span>{product.price} kr</span>
        </section>
      )}
    </>
  );
}

export function OrderModal({
  onClose,
  totalPrice,
  onSubmit,
}: {
  onClose: () => void;
  totalPrice: number;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    date: "",
  });

  const disabled = useMemo(() => {
    if (form.name && form.address && form.date) {
      return false;
    } else {
      return true;
    }
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className="product-modal-background">
      <section className="product-modal">
        <img
          onClick={onClose}
          src="close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          alt="close modal button"
          style={{ cursor: "pointer" }}
        />
        <h2>Din beställning:</h2>
        <p>Totalt: {totalPrice} kr</p>

        <form onSubmit={(e) => onSubmit(e)}>
          <input
            data-cy="name-input"
            name="name"
            type="text"
            placeholder="Namn"
            value={form.name}
            onChange={handleChange}
          />
          <input
            data-cy="address-input"
            name="address"
            type="text"
            placeholder="Adress"
            value={form.address}
            onChange={handleChange}
          />
          <input
            data-cy="date-input"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
          <input
            data-cy="make-order"
            disabled={disabled}
            type="submit"
            value="Bekräfta beställning"
          />
        </form>
      </section>
    </section>
  );
}
