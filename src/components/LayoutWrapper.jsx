import { useLocation, Navbar } from "./Exports";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  const hidePaths = [
    "/developer/dashboard",
    "/developer/profile",
    "/developer/projects",
  ];
  const shouldHideComponent = hidePaths.includes(location.pathname);
  return (
    <div>
      {!shouldHideComponent && <Navbar />}
      {children}
      {!shouldHideComponent && <Footer />}
    </div>
  );
};

export default LayoutWrapper;
