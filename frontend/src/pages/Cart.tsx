import { useMemo, useState } from "react";
import type { ProductType } from "../components/ProductContainer";

type CartProps = {
  cart: ProductType[] | null;
  setCart: () => void;
};

type Form = {
  name: string;
  address: string;
  date: string;
};

type Order = {
  address: string;
  delivery: string;
  id: number;
  cart: Pick<ProductType, "name" | "price">[];
  created_at: string;
  name: string;
  price: number;
};

export default function Cart({ cart, setCart }: CartProps) {
  const [openForm, setOpenForm] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  const [form, setForm] = useState<Form>({
    name: "",
    address: "",
    date: "",
  });
  const [order, setOrder] = useState<Order | null>(null);
  const totalPrice = useMemo(() => {
    if (!cart) return 0;
    return cart.reduce((acc, cur) => acc + cur.price, 0);
  }, [cart]);

  async function getOrderProducts() {
    try {
      const response = await fetch("/products-order.json");
      const result = await response.json();
      setOrder(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function postOrderProducts() {
    const dbCart = cart?.map((product) => {
      return { name: product.name, price: product.price };
    });
    const body = {
      address: form.address,
      cart: dbCart,
      delivery: form.date,
      name: form.name,
      price: totalPrice,
    };
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      setOrder(result[0]);
      console.log(result[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postOrderProducts();
    setOpenForm(false);
    setCart();
    setConfirmationMessage(true);
    getOrderProducts();
  };

  return (
    <>
      <article data-cy="order-container">
        {!cart && !order && <p>Varukorgen är tom.</p>}
        {cart &&
          cart.map((product) => (
            <SelectedProductCard key={product.id} product={product} />
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
            form={form}
            handleChange={handleChange}
          />
        )}

        {confirmationMessage && (
          <p data-cy="confirmation-message">Du har lagt en beställning!</p>
        )}
        {order && <OrderConfirmation order={order} />}
      </article>
    </>
  );
}

export function OrderConfirmation({ order }: { order: Order | null }) {
  console.log(order!.cart[0].name);

  return (
    <>
      {/* {order &&
        order.cart.map((product) => {
          return (
            <section className="order-card" data-cy="order-card">
              <span>{product.name}</span>
              <span>{product.price} kr</span>
            </section>
          );
        })} */}
      {order && <p>{order.name}</p>}
      {order && <p>{order.price}</p>}
      {order && <p>{order.delivery}</p>}
      {/* {order?.cart && <p>{order.cart[0].name}</p>}
      {order?.cart && <p>{order.cart[0].price}</p>} */}
    </>
  );
}

export function SelectedProductCard({ product }: { product: ProductType }) {
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
  form,
  handleChange,
}: {
  onClose: () => void;
  totalPrice: number;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  form: Form;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const disabled = useMemo(() => {
    if (form.name && form.address && form.date) {
      return false;
    } else {
      return true;
    }
  }, [form]);

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
