import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import GetStarted from "./pages/GetStarted";

import DeveloperLogin from "./pages/developer/DeveloperLogin";
import DeveloperSignup from "./pages/developer/DeveloperSignup";
import UserLogin from "./pages/user/UserLogin";
import UserSignup from "./pages/user/UserSignup";

function App() {
  return (
    <div className="font-Gilroy">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/developer/login" element={<DeveloperLogin />} />
          <Route path="/developer/signup" element={<DeveloperSignup />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/signup" element={<UserSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
