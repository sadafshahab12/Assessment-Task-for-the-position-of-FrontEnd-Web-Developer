import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="p-5 fixed w-full text-center z-10">
      <nav className=" bg-slate-700 text-white p-2 max-w-7xl mx-auto rounded-full   ">
        <div className="border border-primary p-1 rounded-full">
          <div className="flex justify-between items-center border-3 border-secondary py-4 px-5 sm:px-10 md:px-20 rounded-full ">
            <div className="logo text-xl sm:text-2xl font-bold">ConnectDev</div>

            <div className="space-x-10 md:block hidden text-sm">
              <Link to={"/"} className="cursor-pointer">
                Home
              </Link>
              <Link to={"/get-started"} className="cursor-pointer">
                Get Started
              </Link>
            </div>
            <div className="md:hidden  cursor-pointer">
              {isOpen ? (
                <IoCloseOutline size={22} onClick={handleToggle} />
              ) : (
                <HiOutlineMenu size={22} onClick={handleToggle} />
              )}
            </div>
            {/* mobile responsive  */}
            <div
              className={`absolute text-sm bg-slate-700 max-w-[100%] w-full left-0 h-70 top-32 py-10 rounded-xl flex flex-col gap-10 items-center duration-300 transition-all ease-in origin-top md:hidden  ${
                isOpen ? "scale-92  opacity-100" : "scale-0 opcaity-0 "
              }`}
            >
              <Link to={"/"} className="cursor-pointer">
                Home
              </Link>
              <Link to={"/get-started"} className="cursor-pointer">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
