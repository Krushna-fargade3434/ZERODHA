import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./AuthForm.css";
import { DASHBOARD_URL } from "../config";

function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(form.email, form.password);
      window.location.assign(DASHBOARD_URL);
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to log in");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Log in</h1>
      {error && <p className="auth-error">{error}</p>}
      <label htmlFor="login-email">Email</label>
      <input
        id="login-email"
        type="email"
        required
        value={form.email}
        onChange={(event) => setForm({ ...form, email: event.target.value })}
      />
      <label htmlFor="login-password">Password</label>
      <input
        id="login-password"
        type="password"
        required
        value={form.password}
        onChange={(event) => setForm({ ...form, password: event.target.value })}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? "Logging in..." : "Log in"}
      </button>
      <p>
        New to Zerodha? <Link to="/signup">Create an account</Link>
      </p>
    </form>
  );
}

export default Login;
