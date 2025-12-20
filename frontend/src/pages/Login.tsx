import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { ContentType: "application/json" },
      body: JSON.stringify({
        email: "example@email.com",
        password: "password",
      }),
    });
    const result = await response.json();

    navigate(`/account/${result.id}`);
  }
  return (
    <section>
      <h2>Logga in</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "5px" }}>
        <label htmlFor="email-input-login">email:</label>
        <input
          data-cy="email-input-login"
          id="email-input-login"
          type="text"
          placeholder="Email"
        />
        <label htmlFor="password-input-login">lösenord:</label>
        <input
          data-cy="password-input-login"
          id="password-input-login"
          type="password"
          placeholder="Lösenord"
        />

        <input
          className="pointer"
          data-cy="submit-login"
          type="submit"
          name=""
          id=""
          value={"Logga in"}
          style={{ marginTop: "15px" }}
        />
      </form>
    </section>
  );
}
