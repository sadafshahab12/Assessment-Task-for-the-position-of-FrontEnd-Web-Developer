import React, { Children } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  const hideNavbarPaths = [
    "/developer/dashboard",
    "/developer/profile",
    "/developer/projects",
  ];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default LayoutWrapper;
