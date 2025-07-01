import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import DeveloperLogin from "./pages/developer/DeveloperLogin";
import DeveloperSignup from "./pages/developer/DeveloperSignup";
import UserLogin from "./pages/user/UserLogin";
import UserSignup from "./pages/user/UserSignup";
import LayoutWrapper from "./components/LayoutWrapper";
import DashboardLayout from "./pages/developer/DashboardLayout";
import Dashboard from "./pages/developer/pages/Dashboard";
import Profile from "./pages/developer/pages/Profile";
import Projects from "./pages/developer/pages/Projects";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="font-Gilroy">
      <Toaster
        position="top-center"
        duration={3000}
        containerStyle={{
          top: "80px",
          zIndex: 9999,
        }}
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#4caf50",
            color: "#fff",
          },
        }}
      />
      <BrowserRouter>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/developer/login" element={<DeveloperLogin />} />
            <Route path="/developer/signup" element={<DeveloperSignup />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/signup" element={<UserSignup />} />
            <Route
              path="/developer"
              element={
                <PrivateRoute>
                  <DashboardLayout />
                </PrivateRoute>
              }
            >
              <Route path="/developer/dashboard" element={<Dashboard />} />
              <Route path="/developer/profile" element={<Profile />} />
              <Route path="/developer/projects" element={<Projects />} />
            </Route>
            {/* Add more routes as needed */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </LayoutWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
