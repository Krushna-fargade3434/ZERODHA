import React from "react";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Checking session...</div>;
  }

  if (!user) {
    window.location.href = "http://localhost:3000/login";
    return null;
  }

  return children;
}

export default ProtectedRoute;
