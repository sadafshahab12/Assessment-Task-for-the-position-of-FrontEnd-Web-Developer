import React from "react";

const Projects = () => {
  const developer = JSON.parse(localStorage.getItem("developerLoggedIn")) || {};
  return (
    <div>
      <h1>Welcome to your Dashboard, {developer.fullName || "Developer"}</h1>
      <p>Your Tech Stack: {developer.techStack || "Not specified"}</p>
      <p>Email: {developer.email || "Not specified"}</p>
      {/* Add more dashboard content as needed */}
    </div>
  );
};

export default Projects;
