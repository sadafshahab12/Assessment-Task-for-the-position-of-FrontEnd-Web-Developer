import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Profile = () => {
  const [char, setChar] = useState("");
  const [titleCase, setTitleCase] = useState("");
  const developer = JSON.parse(localStorage.getItem("developerLoggedIn")) || {};
  useEffect(() => {
    const firstChar = developer.fullName.split()[0].charAt(0).toUpperCase();
    const capitalize = developer.fullName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setChar(firstChar);
    setTitleCase(capitalize);
  });

  return (
    <div className="space-y-6 sm:space-y-10">
      {/* Developer Details */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Developer Profile</h2>
        <div className="p-5 shadow-sm shadow-secondary space-y-4 rounded-md">
          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <div className="max-w-200 w-full flex gap-4 lg:gap-8 lg:flex-row flex-col justify-center sm:justify-start items-center lg:text-left text-center">
              <div className="w-full max-w-20 h-20 rounded-full border-2 border-secondary shadow-md object-cover flex justify-center items-center font-black text-4xl">
                {char}
              </div>
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-[25px] sm:text-4xl font-bold">
                  {titleCase}
                </h2>
                <p className="text-[12px] sm:text-sm text-gray-600">
                  Email: {developer.email || "Not specified"}
                </p>
                <p className="text-[12px] sm:text-sm text-gray-600">
                  Tech Stack: {developer.techStack || "Not specified"}
                </p>
                <p className="text-[12px] sm:text-sm text-gray-600">
                  Member Since: {developer.joined || "2025"}
                </p>
              </div>
            </div>
            <ul className="flex sm:flex-row flex-col gap-4 w-full col-span-1">
              <li className="min-h-30 w-full bg-secondary text-white flex justify-center items-center gap-4 flex-col rounded-lg">
                <a href={developer.linkedInUrl} target="_blank">
                  <BsLinkedin size={28} />
                </a>
                <p>LinkedIn</p>
              </li>
              <li className="min-h-30 w-full bg-secondary text-white flex justify-center items-center gap-4 flex-col rounded-lg">
                <a href={developer.githubUrl} target="_blank">
                  <BsGithub size={28} />
                </a>
                <p>Github</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="space-y-3 p-5 shadow-sm shadow-secondary rounded-md">
        <h3 className="text-xl font-semibold">Change Password</h3>
        <p className="text-sm text-gray-600">
          To keep your account secure, regularly update your password. Make sure
          to use a strong combination of letters, numbers, and symbols.
        </p>
        <button className="auth-button">Change Password</button>
      </div>

      {/* Delete Account Section */}
      <div className="space-y-3 p-5 shadow-sm shadow-secondary rounded-md">
        <h3 className="text-xl font-semibold text-secondary">Delete Account</h3>
        <p className="text-sm text-secondary">
          This action is <strong>permanent</strong> and will delete all your
          data. Proceed only if you're absolutely sure.
        </p>
        <button className="auth-button">Delete My Account</button>
      </div>
    </div>
  );
};

export default Profile;
