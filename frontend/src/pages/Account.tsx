import { useQuery } from "@tanstack/react-query";
import UserOrders from "../components/UserOrders";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

type UserType = {
  id: number;
  name: string;
};

type AccountProps = {
  user: UserType;
};

export default function Account({ user }: AccountProps) {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error, isPending } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch(`/api/orders/${id ?? ""}`).then((result) => result.json()),
    retry: false,
  });

  useEffect(() => {
    if (error) {
      console.log(error.cause);
      navigate("/login");

      if (error.cause === undefined) {
        console.log("dfssdf");
        navigate("/login");
      }
    }
  }, [error, navigate]);

  function handleClick() {
    console.log("hej");
  }

  if (data) {
    console.log(data);
  }

  return (
    <>
      {isPending && <p>hämtar din information...</p>}
      {error && error.cause}
      <UserOrders orders={data} onClick={handleClick} />
    </>
  );
}
