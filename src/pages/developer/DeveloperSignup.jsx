import {
  CiLinkedin,
  CiLock,
  FaGithub,
  FaUser,
  FcGoogle,
  GoStack,
  HiOutlineMail,
  IoLockClosed,
  useNavigate,
  useState,
} from "../../components/Exports";
const DeveloperSignup = () => {
  const navigate = useNavigate();
  const [error, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    techStack: "",
    linkedInUrl: "",
    githubUrl: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      fullName,
      email,
      password,
      confirmPassword,
      techStack,
      linkedInUrl,
      githubUrl,
    } = formData;
    const newError = {};
    if (!fullName) newError.fullName = "FullName is required";
    if (!email) newError.email = "Email is required";
    if (!password) newError.password = "Password is required";
    if (!confirmPassword)
      newError.confirmPassword = "Confirm Password is required";
    if (!techStack) newError.techStack = "Tech Stack is required";
    if (!linkedInUrl) newError.linkedInUrl = "LinkedIn URL is required";
    if (!githubUrl) newError.githubUrl = "GitHub URL is required";

    if (password && confirmPassword && password !== confirmPassword) {
      newError.password = "Passwords do not match";
    }
    if (Object.keys(newError).length > 0) {
      setErrors(newError);
      return;
    }
    setErrors({});
    const developerWithId = {
      ...formData,
      id: crypto.randomUUID(),
    };
    const developerData = localStorage.getItem("developerSignup");
    const storedData = JSON.parse(developerData || "[]");
    storedData.push(developerWithId);
    localStorage.setItem("developerSignup", JSON.stringify(storedData));
    console.log("Form submitted successfully", formData);
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      techStack: "",
      linkedInUrl: "",
      githubUrl: "",
    });
    navigate("/developer/login");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-40 sm:py-50 px-5 sm:px-10 auth-bg ">
      <div className="space-y-4 sm:space-y-8 max-w-[600px] w-full shadow p-4 sm:p-8 rounded-2xl">
        <h1 className="text-center login-heading">Join as a Developer</h1>
        <p className="text-sm sm:text-xl font-normal text-center">
          Showcase your skills and connect with projects.
        </p>
        <form className="space-y-3 sm:space-y-5 text-[12px]">
          <div className="relative">
            <FaUser size={22} className="input-icon" />
            <input
              type="text"
              placeholder="Full Name"
              className="input"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {error.fullName && (
              <p className="text-red-600 text-xs mt-1 pl-5 py-2">
                {error.fullName}
              </p>
            )}
          </div>
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
            {error.email && (
              <p className="text-red-600 text-xs mt-1 pl-5 py-2">
                {error.email}
              </p>
            )}
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
            {error.password && (
              <p className="text-red-600 text-xs mt-1 pl-5 py-2">
                {error.password}
              </p>
            )}
          </div>
          <div className="relative">
            <CiLock size={22} className="input-icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {error.confirmPassword && (
              <p className="text-red-600 text-xs mt-1 pl-5 py-2">
                {error.confirmPassword}
              </p>
            )}
          </div>
          <div className="relative">
            <GoStack size={22} className="input-icon" />
            <input
              type="text"
              placeholder="Tech Stack (e.g., React, Node.js)"
              className="input"
              name="techStack"
              value={formData.techStack}
              onChange={handleChange}
            />
            {error.techStack && (
              <p className="text-red-600 text-xs mt-1 pl-5 py-2">
                {error.techStack}
              </p>
            )}
          </div>
          <div className="relative">
            <CiLinkedin size={22} className="input-icon" />
            <input
              type="url"
              placeholder="LinkedIn Profile or Portfolio URL"
              className="input"
              name="linkedInUrl"
              value={formData.linkedInUrl}
              onChange={handleChange}
            />
            {error.linkedInUrl && (
              <p className="text-red-600 text-xs mt-1 pl-5 py-2">
                {error.linkedInUrl}
              </p>
            )}
          </div>
          <div className="relative">
            <FaGithub size={22} className="input-icon" />
            <input
              type="url"
              placeholder="Github Profile"
              className="input"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
            />
            {error.githubUrl && (
              <p className="text-red-600 text-xs mt-1 pl-5 py-2">
                {error.githubUrl}
              </p>
            )}
          </div>
          <button type="submit" className="auth-button" onClick={handleSubmit}>
            Create Developer Account{" "}
          </button>
          <p className="text-sm text-center text-gray-800 border-b border-gray-300 py-6">
            Already have an account?{" "}
            <a href="/developer/login" className="underline underline-offset-4">
              Login
            </a>
          </p>
          <button className="rounded-full text-sm bg-primary w-full py-4 relative mt-4">
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

export default DeveloperSignup;
