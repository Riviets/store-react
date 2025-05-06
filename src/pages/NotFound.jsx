import React from "react";
import { questionmarkIcon } from "../assets/icons/questionMark";
import Button from "../components/ui/buttons/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex-center">
      <div className="container -translate-y-15 flex flex-col items-center gap-8">
        {questionmarkIcon}
        <p className="text-white font-semibold text-3xl md:text-5xl text-center">
          There is nothing to do here
        </p>
        <Button
          text={"Go back"}
          onClick={() => navigate(-1)}
          className={"bg-white-50 button-hover"}
        />
      </div>
    </div>
  );
};

export default NotFound;
