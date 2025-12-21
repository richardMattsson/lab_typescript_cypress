import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });
    const result = await response.json();
    if (result.error) {
      alert("Något gick fel med att logga in");
    } else {
      localStorage.setItem("token", result.token);
      navigate(`/account`);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <section>
      <h2>Logga in</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "5px" }}>
        <label htmlFor="email-input-login">email:</label>
        <input
          data-cy="email-input-login"
          onChange={handleChange}
          name="email"
          id="email-input-login"
          type="text"
          placeholder="Email"
        />
        <label htmlFor="password-input-login">lösenord:</label>
        <input
          data-cy="password-input-login"
          onChange={handleChange}
          name="password"
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
      <p
        className="pointer"
        onClick={() => navigate("/register")}
        style={{ textDecoration: "underline" }}
      >
        Skapa ny användare
      </p>
    </section>
  );
}
