import React from "react";

const BackButton = ({ text, icon }) => {
  return (
    <button className="group realive">
      {text}
      <div className="group absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        {icon}
      </div>
    </button>
  );
};

export default BackButton;
