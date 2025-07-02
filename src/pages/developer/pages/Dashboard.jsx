import React from "react";

const Dashboard = () => {
  const developer = JSON.parse(localStorage.getItem("developerLoggedIn")) || {};
  return (
    <div>
      <div>
        <h1 className="flex flex-col">
          <span className="text-lg font-light">Welcome to Dashboard,</span>{" "}
          <span className="text-5xl">{developer.fullName || "Developer"}</span>
        </h1>
      </div>
<div>
  <div className="h-50 bg-primary">
    5 Project
  </div>
</div>
      {/* Add more dashboard content as needed */}
    </div>
  );
};

export default Dashboard;
