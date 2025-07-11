import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import PasswordInput from "../../components/PasswordInput";

const UserLogin = () => {
  useEffect(() => {
    document.title = "User Login | Connect Dev";
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-40 sm:py-50 px-5 sm:px-10 auth-bg ">
      <div className="space-y-4 sm:space-y-8 max-w-[450px] w-full shadow p-4 sm:p-8 rounded-2xl">
        <h1 className="text-center login-heading">User Login</h1>
        <p className="text-sm sm:text-xl font-normal text-center">
          Manage your projects and find developers.
        </p>
        <form className="space-y-5 text-[12px]">
          <div className="relative">
            <HiOutlineMail size={22} className="input-icon" />
            <input type="email" placeholder="Email" className="input" />
          </div>

          <PasswordInput name={"password"} placeholder={"Password"} />

          <button type="submit" className="auth-button ">
            Login as User{" "}
          </button>
          <p className="text-sm text-center text-gray-600 border-b border-gray-300 py-6">
            Don't have an account?{" "}
            <a href="/user/signup" className="underline underline-offset-4">
              Sign Up
            </a>
          </p>
          <button className="rounded-full text-sm bg-primary w-full py-4 relative shadow-md shadow-secondary">
            {" "}
            <FcGoogle
              size={30}
              className="absolute top-3.5 left-16 sm:block hidden"
            />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
