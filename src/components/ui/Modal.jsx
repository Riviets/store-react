import React from "react";
import Button from "./Button";
import { closeIcon } from "../../assets/icons/close";

const Modal = ({
  text,
  onClose,
  onConfirm,
  confirmText = "Yes",
  cancelText = "No",
}) => {
  return (
    <div
      className="flex-center absolute inset-0"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="bg-white px-7 py-10 rounded-md shadow-lg relative w-full max-w-[20vw] flex flex-col gap-8">
        <p className="text-xl font-semibold text-center">{text}</p>
        {onConfirm && (
          <div className="flex justify-around">
            <Button
              text={confirmText}
              onClick={onConfirm}
              className={"button-hover"}
            />
            <Button
              text={cancelText}
              onClick={onClose}
              className={"button-hover"}
            />
          </div>
        )}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 cursor-pointer"
        >
          {closeIcon}
        </button>
      </div>
    </div>
  );
};

export default Modal;
