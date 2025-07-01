import React from "react";
import { CiLinkedin, CiLock } from "react-icons/ci";
import { FaGithub, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoStack } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosed } from "react-icons/io5";

const UserSignup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-40 sm:py-50 px-5 sm:px-10  ">
      <div className="space-y-4 sm:space-y-8 max-w-[600px] w-full shadow p-4 sm:p-8 rounded-2xl">
        <h1 className="text-center login-heading">Join as a User</h1>
        <p className="text-sm sm:text-xl font-normal text-center">
          Start collaborating with top developers.
        </p>
        <form className="space-y-3 sm:space-y-5 text-[12px]">
          <div className="relative">
            <FaUser size={22} className="input-icon" />
            <input type="full" placeholder="Full Name" className="input" />
          </div>
          <div className="relative">
            <HiOutlineMail size={22} className="input-icon" />
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="relative">
            <IoLockClosed size={22} className="input-icon" />
            <input type="password" placeholder="Password" className="input" />
          </div>
          <div className="relative">
            <CiLock size={22} className="input-icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
            />
          </div>

          <button type="submit" className="auth-button">
            Create User Account{" "}
          </button>
          <p className="text-sm text-center text-gray-600 border-b border-gray-300 py-6">
            Already have an account? <a href="/user/login">Login</a>
          </p>
          <button className="rounded-full text-sm bg-primary w-full py-4 relative mt-4">
            {" "}
            <FcGoogle
              size={30}
              className="absolute top-3.5 left-30 sm:block hidden"
            />
            Continue with Google
          </button>
          <button className="rounded-full text-sm bg-slate-800 w-full py-4 relative text-primary">
            {" "}
            <FaGithub
              size={30}
              className="absolute top-3.5 left-30 sm:block hidden"
            />
            Continue with GitHub
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
