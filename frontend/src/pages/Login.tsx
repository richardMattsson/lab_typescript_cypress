import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
