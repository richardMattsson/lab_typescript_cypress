import { useQuery, useQueryClient } from "@tanstack/react-query";
import UserOrders from "../components/UserOrders";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { OrderType } from "./Cart";

export default function Account() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [token] = useState(localStorage.getItem("token"));
  const [order, setOrder] = useState<OrderType | null>(null);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const { data, error, isPending } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch(`/api/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((result) => result.json()),
    enabled: !!token,
  });

  function handleClick(id: number) {
    const order = data.filter((order: OrderType) => order.id === id);
    setOrder(order[0]);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    queryClient.clear();
    navigate("/login");
  }

  return (
    <>
      <h2>Ditt konto</h2>
      <button
        data-cy="account-logout"
        className="create-user-button pointer"
        onClick={handleLogout}
      >
        Logga ut
      </button>
      <h3>Tidigare beställningar</h3>
      {isPending && <p>hämtar din information...</p>}
      {error && <p>Något gick fel med att hämta ordrar</p>}
      {data && data.length > 0 && (
        <UserOrders orders={data} onClick={handleClick} />
      )}
      {data && data.length < 1 && <p>Hittade inga tidigare beställningar</p>}
      {order && <OrderModal onClose={() => setOrder(null)} order={order} />}
    </>
  );
}

type OrderModalType = {
  onClose: () => void;
  order: OrderType;
};

function OrderModal({ onClose, order }: OrderModalType) {
  return (
    <section className="product-modal-background">
      <section className="product-modal">
        <img
          alt="close modal button"
          data-cy="close-modal-icon"
          onClick={onClose}
          src="/images/app/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          style={{ cursor: "pointer" }}
        />
        {order.cart.map((item) => (
          <ul
            key={item.name}
            style={{ border: "1px solid #333", borderRadius: "15px" }}
          >
            <p>{`${item.name} á ${item.price} kr`}</p>
            <p>Antal: {item.quantity} st</p>
            <p>Totalt {item.price * (item.quantity || 1)} kr</p>
          </ul>
        ))}
        {`Totalt ${order.price} kr`}
      </section>
    </section>
  );
}
