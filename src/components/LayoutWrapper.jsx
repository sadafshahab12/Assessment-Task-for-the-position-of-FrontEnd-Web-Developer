import { useLocation, Navbar } from "./Exports";

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
