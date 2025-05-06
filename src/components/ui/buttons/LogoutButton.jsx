import Button from "./Button";
import Modal from "../Modal";
import { useState } from "react";
import { authService } from "../../../services/api/authService";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ className }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <>
      <Button
        text={"Logout"}
        onClick={() => {
          setModalVisible(true);
        }}
        className={`text-white-50 border-red-800 border-2 bg-red-600 hover:bg-red-700 transition-all duration-300 ${className}`}
      />
      {modalVisible && (
        <Modal
          text={"Are you sure you want to logout?"}
          onClose={() => {
            setModalVisible(false);
          }}
          onConfirm={handleLogout}
        />
      )}
    </>
  );
};

export default LogoutButton;
