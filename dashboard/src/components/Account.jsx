import React from "react";
import { useAuth } from "../auth/AuthContext";

const Account = () => {
  const { user, logout } = useAuth();

  const initials =
    user && user.name
      ? user.name
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()
      : "U";

  return (
    <div className="account-page" style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
      <div className="account-card" style={{ border: "1px solid #e6e6e6", borderRadius: 12, padding: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <div className="avatar" style={{ width: 56, height: 56, borderRadius: "50%", background: "#fce5ff", color: "#a21caf", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
            {initials}
          </div>
          <div>
            <h2 style={{ margin: 0, fontWeight: 500 }}>{user?.name || "User"}</h2>
            <p style={{ margin: 0, color: "#6b7280" }}>{user?.email || "No email"}</p>
          </div>
        </div>

        <div style={{ display: "grid", gap: "0.75rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f0f0f0", paddingBottom: "0.5rem" }}>
            <span style={{ color: "#6b7280" }}>Account type</span>
            <strong>Individual</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f0f0f0", paddingBottom: "0.5rem" }}>
            <span style={{ color: "#6b7280" }}>Status</span>
            <strong>Active</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#6b7280" }}>Member since</span>
            <strong>Today</strong>
          </div>
        </div>

        <button
          type="button"
          onClick={logout}
          style={{ marginTop: "2rem", background: "#f97316", color: "#fff", border: "none", padding: "0.8rem 1.2rem", borderRadius: 8, cursor: "pointer" }}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Account;
