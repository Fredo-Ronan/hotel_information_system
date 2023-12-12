import { useNavigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
export const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  
  useEffect(() => {
    const tokenFromSession = sessionStorage.getItem("token");
    setToken(tokenFromSession);
    if (!tokenFromSession) {
      navigate("/");
    }
  }, [navigate]);
  
  return token && (children ? children : <Outlet />);
};
