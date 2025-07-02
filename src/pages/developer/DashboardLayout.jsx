import {
  AiOutlineLogout,
  CgProfile,
  GoProjectRoadmap,
  HiOutlineHome,
  Link,
  LuLayoutDashboard,
  Outlet,
  ToolTip,
  useEffect,
  useNavigate,
  useState,
} from "../../components/Exports";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState({});
  const [char, setChar] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("developerLoggedIn");
    navigate("/developer/login");
  };
  useEffect(() => {
    const developerData = localStorage.getItem("developerLoggedIn");
    const response = JSON.parse(developerData);
    setResponse(response || {});
    const char = response.fullName.split("")[0].toUpperCase();
    setChar(char);
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center p-2 sm:p-4 py-6 bg-secondary max-w-[60px] md:max-w-[300px] w-full ">
        <div className="flex flex-col md:flex-row  justify-center items-center gap-4 mb-8 w-full">
          <h1 className="h-11 sm:h-14 max-w-14 w-full flex justify-center items-center rounded-full text-2xl sm:text-4xl bg-primary">
            {char}
          </h1>
          <div className="text-center md:block hidden text-primary">
            <h2 className="text-xl font-bold">{response.fullName}</h2>
            <p className="text-sm">Tech Stack: {response.techStack}</p>
          </div>
        </div>

        <nav className="flex flex-col gap-6  w-auto md:w-full ">
          <Link
            to={"/"}
            className="flex items-center justify-center gap-4 dashboard-link text-center group relative"
          >
            <HiOutlineHome size={20} />
            <p className="md:block hidden">Home</p>
            <ToolTip content={"Dashboard"} />
          </Link>
          <Link
            to={"/developer/dashboard"}
            className="flex items-center justify-center gap-4 dashboard-link text-center group relative"
          >
            <LuLayoutDashboard size={20} />
            <p className="md:block hidden">Dashboard</p>
            <ToolTip content={"Dashboard"} />
          </Link>
          <Link
            to={"/developer/profile"}
            className="flex items-center justify-center gap-4 dashboard-link text-center group relative"
          >
            <CgProfile size={20} />
            <p className="md:block hidden">Profile</p>
            <ToolTip content={"Profile"} />
          </Link>
          <Link
            to={"/developer/projects"}
            className="flex items-center justify-center gap-4 dashboard-link text-center relative group"
          >
            <GoProjectRoadmap size={20} />
            <p className="md:block hidden">Projects</p>
            <ToolTip content={"Projects"} />
          </Link>
          <button
            className="dashboard-link flex justify-center items-center gap-4 relative group"
            onClick={handleLogout}
          >
            <ToolTip content={"Logout"} />
            <AiOutlineLogout size={20} />
            <p className="md:block hidden">Logout</p>
          </button>
        </nav>
      </div>
      <div className="w-full p-2 sm:p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
