import { useQuery, useQueryClient } from "@tanstack/react-query";
import UserOrders from "../components/UserOrders";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Account() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [token] = useState(localStorage.getItem("token"));

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

  function handleClick() {
    console.log("hej");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    queryClient.clear();
    navigate("/login");
  }

  return (
    <>
      <h2>Ditt konto</h2>
      <p className="pointer" onClick={handleLogout}>
        Logga ut
      </p>
      {isPending && <p>hämtar din information...</p>}
      {error && <p>Något gick fel med att hämta ordrar</p>}
      <h3>Tidigare beställningar</h3>
      {data && data.length < 1 && <p>Du har inga beställningar</p>}
      {data && data.length > 0 && (
        <UserOrders orders={data} onClick={handleClick} />
      )}
    </>
  );
}
