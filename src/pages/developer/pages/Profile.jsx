import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Profile = () => {
  const developer = JSON.parse(localStorage.getItem("developerLoggedIn")) || {};
  return (
    <div className="space-y-8 p-5">
      <h2 className="text-xl sm:text-2xl font-bold">Developer Profile</h2>
      <div className="p-5 shadow-md space-y-4">
        <p className="text-sm">Name : {developer.fullName}</p>
        <p className="text-sm">Your Tech Stack: {developer.techStack || "Not specified"}</p>
        <p className="text-sm">Email: {developer.email || "Not specified"}</p>
        <ul className="flex gap-4">
          <li>
            <a href={developer.linkedInUrl}>
              <BsLinkedin size={30} />
            </a>
          </li>
          <li>
            {" "}
            <a href={developer.githubUrl}>
              <BsGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
      {/* Add more dashboard content as needed */}
    </div>
  );
};

export default Profile;
