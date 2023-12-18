import { useNavigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
const ProtectedAdminRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  useEffect(() => {
    const tokenDariSS = sessionStorage.getItem("admin");
    setToken(tokenDariSS);
    if (!tokenDariSS) {
      navigate("/");
    }
  }, [navigate]);
  return token && (children ? children : <Outlet />);
};

export default ProtectedAdminRoutes;
