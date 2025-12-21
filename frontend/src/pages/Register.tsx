import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const result = await response.json();
      if (result.error) {
        console.log(result);
        setErrorMsg(true);
      } else {
        navigate("/login");
      }
    } catch {
      console.log("error");
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setErrorMsg(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <section style={{ display: "grid", gap: "5px" }}>
      <h2>Skapa ny användare</h2>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "5px", marginBottom: "20px" }}
      >
        <label htmlFor="email-register">email:</label>
        <input
          data-cy="email-input-register"
          type="text"
          name="email"
          id="email-register"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="password-register">lösenord:</label>

        <input
          data-cy="password-input-register"
          type="password"
          name="password"
          id="password-register"
          placeholder="Lösenord"
          value={form.password}
          onChange={handleChange}
        />
        <input
          data-cy="submit-register"
          type="submit"
          value={"Registrera"}
          style={{ marginTop: "15px" }}
        />
      </form>
      {errorMsg && (
        <p data-cy="errorMsg-register">
          Angiven email finns redan som användare.
        </p>
      )}
      <button
        className="create-user-button pointer"
        onClick={() => navigate("/login")}
        style={{ textDecoration: "underline" }}
      >
        Logga in
      </button>
    </section>
  );
}
