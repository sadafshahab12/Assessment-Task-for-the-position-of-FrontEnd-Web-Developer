import { useEffect, useState } from "react";
import {
  FaNodeJs,
  FaReact,
  RiTailwindCssLine,
  SiFirebase,
} from "../../../components/Exports";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Connect Dev";
  }, []);
  const [titleCase, setTitleCase] = useState("");
  const developer = JSON.parse(localStorage.getItem("developerLoggedIn")) || {};
  useEffect(() => {
    const capitalize = developer.fullName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setTitleCase(capitalize);
  });

  return (
    <div className="w-full ">
      <div className="pb-5 space-y-3">
        <h1 className="flex flex-col">
          <span className="text-lg font-light">Welcome to Dashboard,</span>{" "}
          <span className="text-3xl sm:text-5xl md:text-6xl">
            {titleCase || "Developer"}
          </span>
        </h1>
        <p className="text-sm bg-slate-800 text-white w-max px-4 py-1  rounded-full">
          Developer
        </p>
      </div>
      <div className="border-t pt-6 w-full border-gray-300"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="widgets">
          <p className="widgets-tag">Current Project</p>
          <h2 className="text-xl sm:text-2xl font-bold">
            Portfolio Website Redesign
          </h2>
          <p className="text-sm">Status: In Progress</p>
          <p className="border-t border-gray-800 my-4"></p>
          <p className="text-sm">Deadline: Aug 5, 2025</p>
        </div>
        <div className="widgets grid grid-cols-2 gap-6 ">
          <div className="space-y-2 justify-self-center text-center">
            <h2 className="text-4xl font-bold">3</h2>
            <p className="widgets-tag text-[10px] px-2">Active Projects</p>
          </div>
          <div className="space-y-2 justify-self-center text-center">
            <h2 className="text-4xl font-bold">2</h2>
            <p className="widgets-tag text-[10px] px-2">Completed Projects</p>
          </div>
          <div className="space-y-2 justify-self-center text-center">
            <h2 className="text-4xl font-bold">2</h2>
            <p className="widgets-tag text-[10px] px-2">Pending Projects</p>
          </div>
          <div className="relative w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-gray-200 justify-self-center">
            <div className="absolute inset-0 rounded-full half-circle"></div>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <h1 className="text-xl sm:text-2xl text-gray-800">28%</h1>
            </div>
          </div>
        </div>
        <div className="widgets">
          {" "}
          <p className="widgets-tag">Recent Bids </p>
          <p className="border-t border-gray-800 my-4"></p>
          <h2 className="text-xl sm:text-2xl font-bold">
            React Developer for E-commerce App
          </h2>
          <p className="text-sm">Bid Amount: $700</p>
          <p className="text-sm">Date Submitted: June 25, 2025</p>
        </div>
        <div className="widgets">
          <p className="widgets-tag">Upcoming Deadline</p>
          <p className="border-t border-gray-800 my-4"></p>
          <p className="text-sm">Submit UI for “Fitness App” (Jul 5, 2025)</p>
          <p className="text-sm">
            API Integration for “E-commerce Site” (Jul 7, 2025)
          </p>
          <p className="text-sm">
            Final Testing for “Booking System” (Jul 10, 2025)
          </p>
          <p className="text-sm">
            Client Demo for “Event Manager App” (Jul 12, 2025)
          </p>
        </div>
        <div className="widgets">
          <p className="widgets-tag">Top Skills Used</p>
          <p className="border-t border-gray-800 my-4"></p>
          <ul className="list-none space-y-3 grid grid-cols-2">
            <li className="text-sm flex flex-col items-center gap-2">
              <FaReact size={20} /> React.js
            </li>
            <li className="text-sm flex flex-col items-center gap-2">
              <FaNodeJs size={20} /> Node.js
            </li>
            <li className="text-sm flex flex-col items-center gap-2">
              <SiFirebase size={20} />
              Firebase
            </li>
            <li className="text-sm flex flex-col items-center gap-2">
              <RiTailwindCssLine size={20} />
              Tailwind CSS
            </li>
          </ul>
        </div>
        <div className="widgets">
          <h2 className="text-xl sm:text-2xl font-bold">Performance Summary</h2>
          <p className="text-sm">Jobs Completed: 18</p>
          <p className="text-sm">Avg. Rating: ⭐ 4.8/5</p>
          <p className="text-sm">Total Earnings: $14,200</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
