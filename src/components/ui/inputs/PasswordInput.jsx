import { useState } from "react";
import { eyeIcon } from "../../../assets/icons/eyeIcon";
import { eyeClosedIcon } from "../../../assets/icons/eyeClosed";

const PasswordInput = ({
  register,
  error,
  name = "password",
  placeholder = "••••••••",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="space-y-2">
      <div className="relative">
        <input
          {...register(name)}
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          className="input"
        />
        <div
          onClick={() => setIsVisible(!isVisible)}
          className="absolute top-0 bottom-0 right-0 px-4 flex-center cursor-pointer"
        >
          {isVisible ? eyeIcon : eyeClosedIcon}
        </div>
      </div>
      <div className="min-h-[1.5rem]">
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default PasswordInput;
