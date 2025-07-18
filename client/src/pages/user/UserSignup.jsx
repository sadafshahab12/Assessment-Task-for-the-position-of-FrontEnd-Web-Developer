import { useEffect } from "react";
import { FaGithub, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import PasswordInput from "../../components/PasswordInput";

const UserSignup = () => {
  useEffect(() => {
    document.title = "User Sign Up | Connect Dev";
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-40 sm:py-50 px-5 sm:px-10 auth-bg">
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
          <PasswordInput name={"password"} placeholder={"Password"} />
          <PasswordInput
            name={"confirmPassword"}
            placeholder={"Confirm Password"}
          />
          <button type="submit" className="auth-button">
            Create User Account{" "}
          </button>
          <p className="text-sm text-center text-gray-600 border-b border-gray-300 py-6">
            Already have an account?{" "}
            <a href="/user/login" className="underline underline-offset-4">
              Login
            </a>
          </p>
          <button className="rounded-full text-sm bg-primary w-full py-4 relative mt-4 shadow-md shadow-secondary">
            {" "}
            <FcGoogle
              size={30}
              className="absolute top-3.5 left-30 sm:block hidden"
            />
            Continue with Google
          </button>
          <button className="rounded-full text-sm bg-slate-800 w-full py-4 relative text-primary shadow-md shadow-primary">
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
