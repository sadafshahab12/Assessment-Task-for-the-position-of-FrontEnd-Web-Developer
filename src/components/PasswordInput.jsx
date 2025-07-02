// components/PasswordInput.jsx
import { useState } from "react";
import { IoLockClosed } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const PasswordInput = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <IoLockClosed size={22} className="input-icon" />
      <input
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="input"
        value={value}
        onChange={onChange}
      />
      {showPassword ? (
        <IoMdEye
          size={22}
          className="input-icon right-5 left-auto cursor-pointer"
          onClick={() => setShowPassword(false)}
        />
      ) : (
        <IoMdEyeOff
          size={22}
          className="input-icon right-5 left-auto cursor-pointer"
          onClick={() => setShowPassword(true)}
        />
      )}
    </div>
  );
};

export default PasswordInput;
