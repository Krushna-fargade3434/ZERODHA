import React from "react";
import { useAuth } from "./AuthContext";
import { FRONTEND_URL } from "../config";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Checking session...</div>;
  }

  if (!user) {
    const loginUrl = `${FRONTEND_URL}/login`;
    if (window.location.href !== loginUrl) {
      window.location.replace(loginUrl);
    }
    return null;
  }

  return children;
}

export default ProtectedRoute;
