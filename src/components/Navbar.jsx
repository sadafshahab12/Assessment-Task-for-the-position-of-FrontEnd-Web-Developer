import {
  HiOutlineMenu,
  IoCloseOutline,
  Link,
  useNavigate,
  useState,
} from "./Exports";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = JSON.parse(localStorage.getItem("developerLoggedIn"));
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("developerLoggedIn");
    navigate("/developer/login");
  };
  return (
    <header className="p-5 fixed w-full text-center z-10">
      <nav className=" bg-slate-900 text-white p-2 max-w-7xl mx-auto rounded-full   ">
        <div className="border border-primary p-1 rounded-full">
          <div className="flex justify-between items-center border-3 border-secondary py-4 px-5 sm:px-10 md:px-20 rounded-full ">
            <div className="logo text-xl sm:text-2xl font-bold">ConnectDev</div>

            <div className=" gap-10 md:flex hidden text-sm">
              <Link to={"/"} className="cursor-pointer">
                Home
              </Link>
              <Link to={"/get-started"} className="cursor-pointer">
                Get Started
              </Link>
              {isLoggedIn && (
                <div className="flex items-center gap-10">
                  <Link to={"/developer/dashboard"}>Dashboard</Link>
                  <button onClick={handleLogout} className="cursor-pointer">
                    Logout
                  </button>
                </div>
              )}
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
              className={`absolute text-sm bg-slate-700 max-w-[100%] w-full left-0 min-h-70 top-32 py-10 rounded-xl flex flex-col gap-10 items-center duration-300 transition-all ease-in origin-top md:hidden  ${
                isOpen ? "scale-92  opacity-100" : "scale-0 opcaity-0 "
              }`}
            >
              <Link to={"/"} className="cursor-pointer">
                Home
              </Link>
              <Link to={"/get-started"} className="cursor-pointer">
                Get Started
              </Link>
              <Link to={"/get-started"} className="cursor-pointer">
                Get Started
              </Link>
              {isLoggedIn && (
                <div className="flex flex-col items-center gap-10">
                  <Link to={"/developer/dashboard"}>Dashboard</Link>
                  <button onClick={handleLogout} className="cursor-pointer">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
