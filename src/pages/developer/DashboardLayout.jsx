import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState({});
  const handleLogout = () => {
    localStorage.removeItem("developerLoggedIn");
    navigate("/developer/login");
  };
  useEffect(() => {
    const developerData = localStorage.getItem("developerLoggedIn");
    const response = JSON.parse(developerData);
    setResponse(response || {});
    console.log(response);
  }, []);

  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col items-center justify-between ">
        <h2>Welcome {response.fullName}</h2>
        <p>{response.techStack}</p>

        <nav>
          <Link to={"/developer/dashboard"}>Dashboard</Link>
          <Link to={"/developer/profile"}>Profile</Link>
          <Link to={"/developer/projects"}>Projects</Link>
        </nav>
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
