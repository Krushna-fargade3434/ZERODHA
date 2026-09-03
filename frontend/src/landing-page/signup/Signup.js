import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { DASHBOARD_URL } from "../../config";
import "../../auth/AuthForm.css";

function Signup() {
    const { signup } = useAuth();
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setSubmitting(true);
        try {
            await signup(form.name, form.email, form.password);
            window.location.assign(DASHBOARD_URL);
        } catch (requestError) {
            setError(requestError.response?.data?.message || "Unable to create account");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h1>Create your account</h1>
            {error && <p className="auth-error">{error}</p>}
            <label htmlFor="signup-name">Name</label>
            <input id="signup-name" required value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })} />
            <label htmlFor="signup-email">Email</label>
            <input id="signup-email" type="email" required value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })} />
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" minLength="8" required value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })} />
            <button type="submit" disabled={submitting}>
                {submitting ? "Creating account..." : "Sign up"}
            </button>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </form>
    );
}

export default Signup;