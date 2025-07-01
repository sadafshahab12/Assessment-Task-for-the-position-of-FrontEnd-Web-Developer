import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-l from-secondary to-primary h-screen flex flex-col justify-center items-center hero-liquid pt-25 sm:pt-30 md:pt-40">
      <div className="max-w-5xl w-full space-y-6 px-5 sm:px-10">
        <h1 className="font-bold text-slate-900 text-center space-y-6 sm:space-y-10  ">
          <span className="block text-5xl sm:text-6xl md:text-7xl">
            {" "}
            Join DevConnect
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-medium ">
            Empowering Developers and Users to Create the Next Era of Technology
          </span>
        </h1>

        <div className="relative max-w-2xl mx-auto ">
          <input
            type="text"
            placeholder="Search for developers..."
            className="w-full h-12 p-4 border border-gray-300 rounded-full block mx-auto outline-none focus:ring-2 focus:ring-primary transition-all ease-in duration-200 "
          />
          <IoSearchOutline
            className="absolute top-3 right-4 cursor-pointer text-white"
            size={22}
          />
        </div>
        <p className="text-center text-sm sm:text-lg text-slate-700 ">
          Discover talent, collaborate on groundbreaking projects, and grow your
          skills—all in one place.
        </p>
        <button className="button" onClick={()=> navigate("/get-started")}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
