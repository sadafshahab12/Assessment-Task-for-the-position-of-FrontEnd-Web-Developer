import {
  FcGoogle,
  HiOutlineMail,
  IoLockClosed,
  toast,
  useNavigate,
  useState,
} from "../../components/Exports";

const DeveloperLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const storedData = JSON.parse(
      localStorage.getItem("developerSignup") || "[]"
    );
    const user = storedData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      toast.success(`Login Successfully ${formData.email}`);
      localStorage.setItem("developerLoggedIn", JSON.stringify(user));
      setFormData({
        email: "",
        password: "",
      });
      navigate("/developer/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-40 sm:py-50 px-5 sm:px-10  ">
      <div className="space-y-4 sm:space-y-8 max-w-[450px] w-full shadow p-4 sm:p-8 rounded-2xl">
        <h1 className="text-center login-heading">Developer Login</h1>
        <p className="text-sm sm:text-xl font-normal text-center">
          Access your developer workspace.
        </p>
        <form className="space-y-5 text-[12px]">
          <div className="relative">
            <HiOutlineMail size={22} className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              className="input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <IoLockClosed size={22} className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              className="input"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="auth-button" onClick={handleSubmit}>
            Login as Developer{" "}
          </button>
          <p className="text-sm text-center text-gray-600 border-b border-gray-300 py-6">
            Don't have an account? <a href="/developer/signup">Sign Up</a>
          </p>
          <button className="rounded-full text-sm bg-primary w-full py-4 relative">
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

export default DeveloperLogin;
