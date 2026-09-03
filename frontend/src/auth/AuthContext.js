import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/auth/me`, { withCredentials: true })
      .then(({ data }) => setUser(data.user))
      .catch((error) => {
        if (error.response?.status !== 401) {
          console.error("Unable to restore session:", error);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const { data } = await axios.post(
      `${API_URL}/auth/login`,
      { email, password },
      { withCredentials: true }
    );
    setUser(data.user);
  };

  const signup = async (name, email, password) => {
    const { data } = await axios.post(
      `${API_URL}/auth/signup`,
      { name, email, password },
      { withCredentials: true }
    );
    setUser(data.user);
  };

  const logout = async () => {
    await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
