import { useNavigate } from "react-router-dom";
import ToolTip from "../components/ToolTip";

const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-primary py-40 sm:py-50">
      <div className=" space-y-12 px-6">
        <div className="text-center space-y-6">
          <h1 className="get-started-H1 space-y-4">
            <span className="block text-2xl font-medium bg-slate-900 text-secondary p-2 w-max mx-auto">
              Every Great Story
            </span>{" "}
            <span>Begins With a Choice</span>
          </h1>
          <p className="text-sm sm:text-xl font-normal">
            Are you here to create, or to find the talent who will build your
            vision?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 sm:pt-20 max-w-6xl mx-auto">
          {/* Developer Card */}
          <div className="relative group border rounded-lg bg-white p-6 shadow-md flex flex-col items-center gap-4 cursor-pointer transition-transform hover:scale-[1.02]">
            <img
              src="/developer1.png"
              alt="Developer"
              className="w-20 sm:w-24 h-20 sm:h-24 object-cover"
            />
            <h2 className="text-xl font-bold text-center">
              Showcase your skills and grow your network.
            </h2>
            <p className="text-center text-gray-600">
              Ready to share your skills and grow your network?
            </p>
            <button className="button mt-2" onClick={() => navigate("/developer/login")}>
              I’m a Developer
            </button>
            <ToolTip
              content={
                "Select this if you want to offer your skills as a developer."
              }
            />
          </div>

          {/* User Card */}
          <div className="relative group border rounded-lg bg-white p-6 shadow-md flex flex-col items-center gap-4 cursor-pointer transition-transform hover:scale-[1.02]">
            <img
              src="/user.png"
              alt="User"
              className="w-20 sm:w-24 h-20 sm:h-24 object-cover"
            />
            <h2 className="text-xl font-bold text-center">
              Start exploring top talent now.
            </h2>
            <p className="text-center text-gray-600  ">
              Find the perfect developer to bring your ideas to life.
            </p>
            <button className="button mt-2" onClick={() => navigate("/user/login")}>I’m a User</button>
            <ToolTip
              content={
                "Select this if you want to explore and hire top developers."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
