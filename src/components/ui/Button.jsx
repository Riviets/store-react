import React from "react";

const Button = ({
  text,
  onClick,
  className,
  isDisabled = false,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold border-1 px-5 py-2 rounded-md md:text-xl cursor-pointer transition duration-300 ${className}`}
      disabled={isDisabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
