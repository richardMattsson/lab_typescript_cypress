import { useQuery } from "@tanstack/react-query";
import UserOrders from "../components/UserOrders";

type UserType = {
  id: number;
  name: string;
};

type AccountProps = {
  user: UserType;
};

export default function Account({ user }: AccountProps) {
  console.log(user);

  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetch(`/api/orders/${1}`).then((result) => result.json()),
  });

  function handleClick() {
    console.log("hej");
  }

  return (
    <>
      <UserOrders orders={data} onClick={handleClick} />
    </>
  );
}
