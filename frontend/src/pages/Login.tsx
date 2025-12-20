import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("/login", {
      method: "POST",
      headers: { ContentType: "application/json" },
      body: JSON.stringify({
        email: "example@email.com",
        password: "password",
      }),
    });
    navigate("/account");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input data-cy="email-input-login" type="text" />
      <input data-cy="password-input-login" type="password" />

      <input data-cy="submit-login" type="submit" name="" id="" />
    </form>
  );
}
