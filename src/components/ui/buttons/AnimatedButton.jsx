import React from "react";

const AnimatedButton = ({
  text,
  icon,
  onClick,
  className,
  isDisabled = false,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-8 md:px-12 font-semibold border-1 py-2 rounded-md cursor-pointer transition duration-500 ${className}`}
      disabled={isDisabled}
      type={type}
    >
      <p className="group-hover:translate-x-3 transition ease-in-out">{text}</p>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             opacity-0 group-hover:opacity-100 
             group-hover:-translate-x-17 
             transition-all duration-300 ease-in-out"
      >
        {icon}
      </div>
    </button>
  );
};

export default AnimatedButton;
