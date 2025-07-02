import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoProjectRoadmap } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState({});
  const [char, setChar] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("developerLoggedIn");
    navigate("/developer/login");
  };
  useEffect(() => {
    const developerData = localStorage.getItem("developerLoggedIn");
    const response = JSON.parse(developerData);
    setResponse(response || {});
    console.log(response);
    const char = response.fullName.split("")[0].toUpperCase();
    setChar(char);
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center justify-between p-4 bg-secondary max-w-[80px] md:max-w-sm w-full  ">
        <div className="flex flex-col md:flex-row  justify-center items-center gap-4 mb-8 w-full">
          <h1 className="h-14 max-w-14 w-full flex justify-center items-center rounded-full text-4xl bg-primary">
            {char}
          </h1>
          <div className="text-center md:block hidden">
            <h2 className="text-xl font-bold">{response.fullName}</h2>
            <p className="text-sm">Tech Stack: {response.techStack}</p>
          </div>
        </div>

        <nav className="flex flex-col  gap-6 h-100 w-auto md:w-full ">
          <div className="flex items-center justify-center gap-4 dashboard-link text-center">
            <LuLayoutDashboard size={20} />
            <Link to={"/developer/dashboard"} className="md:block hidden">
              Dashboard
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4 dashboard-link text-center">
            <CgProfile size={20} />
            <Link to={"/developer/profile"} className="md:block hidden">
              Profile
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4 dashboard-link text-center">
            <GoProjectRoadmap size={20} />
            <Link to={"/developer/projects"} className="md:block hidden">
              Projects
            </Link>
          </div>
        </nav>
        <button
          className="dashboard-link flex justify-center items-center gap-4"
          onClick={handleLogout}
        >
          <AiOutlineLogout size={20} />
          <p className="md:block hidden">Logout</p>
        </button>
      </div>
      <div className=" p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
