import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://34.95.167.109/api/v1";

export const authContext = createContext();

export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${API}/accounts/register/`,
        formData
      );
    } catch (error) {
      setError(Object.values(error.response.data).flat(Infinity)[0]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (formData, email) => {
    setLoading(true);

    try {
      const res = await axios.post(
        `${API}/accounts/login/`,
        formData
      );
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      console.log(res);
      setUser(email);
    } catch (error) {
      console.log(error);
      setError(error.response.data.detail);
    } finally {
      setLoading(false);
    }
  };

  const checkAuth = async () => {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}/accounts/refresh/`, {
        refresh: tokens.refresh,
        config,
      });

      localStorage.setItem(
        "tokens",
        JSON.stringify({
          access: res.data.access,
          refresh: res.data.refresh,
        })
      );
      const email = localStorage.getItem("email");
      setUser(email);
    } catch (error) {
      console.log(error);
      handleLogout();
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setUser(false);
  };

  const values = {
    handleRegister,
    handleLogin,
    error,
    user,
    setError,
    loading,
    handleLogout,
    checkAuth,
  };
  return (
    <authContext.Provider value={values}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
