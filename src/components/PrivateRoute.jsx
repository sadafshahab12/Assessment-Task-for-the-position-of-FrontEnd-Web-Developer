import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("developerLoggedIn");

  return isLoggedIn ? children : <Navigate to={"/developer/login"} replace />;
};

export default PrivateRoute;
