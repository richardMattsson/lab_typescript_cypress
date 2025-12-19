import { useMemo, useState } from "react";
import { type ProductType } from "../components/ProductContainer";
import type { UpdateCartType } from "../router/router";
import { useNavigate } from "react-router-dom";

type CartProps = {
  cart: ProductType[] | null;
  setCart: () => void;
  updateCart: ({ action, product }: UpdateCartType) => void;
};

type Form = {
  name: string;
  address: string;
  date: string;
  payment: "swish" | "card" | "";
};

export type OrderType = {
  user_id: number;
  address: string;
  delivery: string;
  id: number;
  cart: Pick<ProductType, "name" | "price" | "quantity">[];
  created_at: string;
  name: string;
  price: number;
};

export default function Cart({ cart, setCart, updateCart }: CartProps) {
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState<Form>({
    name: "",
    address: "",
    date: "",
    payment: "",
  });
  const [order, setOrder] = useState<OrderType | null>(null);
  const totalPrice = useMemo(() => {
    if (!cart) return 0;
    return cart.reduce((acc, cur) => acc + cur.price * (cur.quantity || 1), 0);
  }, [cart]);
  const navigate = useNavigate();

  async function postOrderProducts() {
    const dbCart = cart?.map((product) => {
      return {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      };
    });
    const body = {
      user_id: 1,
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
      setCart();
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postOrderProducts();
    setOpenForm(false);
  };

  return (
    <>
      <article data-cy="order-container">
        {(cart && cart.length === 0 && <p>Varukorgen är tom.</p>) ||
          (!cart && !order && <p>Varukorgen är tom.</p>)}
        {cart &&
          cart.map((product) => (
            <SelectedProductCard
              key={product.id}
              product={product}
              updateCart={updateCart}
              openForm={openForm}
            />
          ))}

        {cart && cart.length > 0 && (
          <>
            <p className="text-align-end">Totalt: {totalPrice} kr</p>
            <section
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span
                className="pointer underscore"
                onClick={() => navigate("/")}
                data-cy="continue-shopping"
              >
                Fortsätt handla
              </span>
              <span
                className="pointer underscore"
                onClick={() => setOpenForm(true)}
                data-cy="continue-order"
              >
                Gå vidare
              </span>
            </section>
          </>
        )}

        {openForm && (
          <OrderModal
            cart={cart}
            onClose={() => setOpenForm(false)}
            onSubmit={onSubmit}
            totalPrice={totalPrice}
            form={form}
            handleChange={handleChange}
            openForm={openForm}
          />
        )}

        {order && <OrderConfirmation order={order} />}
      </article>
    </>
  );
}

export function OrderConfirmation({ order }: { order: OrderType | null }) {
  return (
    <>
      <h2>{order && order.name}</h2>
      <p data-cy="confirmation-message">Kvitto på din beställning.</p>

      {order &&
        order.cart.map((product, index) => {
          return (
            <section
              className="order-card-confirmation"
              data-cy="order-confirmation"
              key={index}
            >
              <span>{`${product.name} x ${product.quantity}`}</span>
              <span>{product.price * (product.quantity || 1)} kr</span>
            </section>
          );
        })}
      {order && <p className="text-align-end">Total: {order.price} kr</p>}
      {order && <p>Adress: {order.address}</p>}
      {order && <p>Levereras: {order.delivery}</p>}
      {order && (
        <p>
          Skapad:{" "}
          {`${order.created_at.split("T")[0]} kl.${
            order.created_at.split("T")[1].split(".")[0]
          }`}
        </p>
      )}
    </>
  );
}

export function SelectedProductCard({
  product,
  updateCart,
  openForm,
}: {
  product: ProductType;
  updateCart: ({ action, product }: UpdateCartType) => void;
  openForm: boolean;
}) {
  return (
    <>
      {product && (
        <section className="order-card" data-cy={`order-card-${product.id}`}>
          <span className="product-name">{product.name}</span>
          <span className="product-price">{`${
            product.price * (product.quantity || 1)
          } kr`}</span>
          {openForm && (
            <span className="product-quantity-confirmation">{`x ${product.quantity}`}</span>
          )}
          {!openForm && (
            <>
              <img
                className="delete-icon pointer"
                data-cy={`delete-icon-${product.id}`}
                onClick={() => updateCart({ action: "delete", product })}
                src="/images/app/delete-icon.svg"
                alt="delete-icon"
              />
              <span className="product-quantity">Kvantitet</span>
              <select
                className="product-select"
                name="quantity"
                id="product-quantity"
              >
                {[
                  product.quantity,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                ].map((number, index) => {
                  return (
                    <option
                      className="product-option-number"
                      onClick={() =>
                        updateCart({
                          action: "update quantity",
                          product,
                          quantity: number,
                        })
                      }
                      key={index === product.quantity ? 0 : number}
                      value={number}
                    >
                      {number}
                    </option>
                  );
                })}
              </select>
            </>
          )}
        </section>
      )}
    </>
  );
}

export function OrderModal({
  cart,
  onClose,
  totalPrice,
  onSubmit,
  form,
  handleChange,
  openForm,
}: {
  cart: ProductType[] | null;
  onClose: () => void;
  totalPrice: number;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  form: Form;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  openForm: boolean;
}) {
  const disabled = useMemo(() => {
    if (form.name && form.address && form.date && form.payment) {
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
          src="/images/app/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          alt="close modal button"
          style={{ cursor: "pointer" }}
        />
        <h2>Din beställning:</h2>
        {cart &&
          cart.map((product) => (
            <SelectedProductCard
              key={product.id}
              product={product}
              updateCart={() => {}}
              openForm={openForm}
            />
          ))}
        <p style={{ textAlign: "end" }}>Totalt: {totalPrice} kr</p>

        <form className="order-form" onSubmit={(e) => onSubmit(e)}>
          <label htmlFor="name-input">Namn:</label>
          <input
            data-cy="name-input"
            id="name-input"
            name="name"
            type="text"
            placeholder="Namn"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="address-input">Adress:</label>
          <input
            data-cy="address-input"
            id="address-input"
            name="address"
            type="text"
            placeholder="Adress"
            value={form.address}
            onChange={handleChange}
          />

          <label htmlFor="date-input">Tid för leverens:</label>
          <select
            data-cy="date-input"
            id="date-input"
            onChange={handleChange}
            name="date"
            value={form.date}
          >
            <option style={{ fontFamily: "Google Sans Code" }} value="">
              Välj dag
            </option>
            <option value="Lördag kl. 08-09">Lördag kl. 08-09</option>
            <option value="Söndag kl. 08-09">Söndag kl. 08-09</option>
          </select>

          <h3 className="text-align-center" style={{ fontWeight: 400 }}>
            Betalningsmetod
          </h3>
          <section
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "30px",
            }}
          >
            <div>
              <label htmlFor="radio-swish">Swish</label>
              <input
                data-cy="radio-swish"
                type="radio"
                name="payment"
                id="radio-swish"
                value="swish"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="radio-card">Kort</label>
              <input
                data-cy="radio-card"
                type="radio"
                name="payment"
                id="radio-card"
                value={"card"}
                onChange={handleChange}
              />
            </div>
          </section>
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
