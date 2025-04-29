import Button from "./Button";
import { authService } from "../../services/api/authService";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../../services/api/usersService";
import { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const userId = localStorage.getItem("userId");
  const { data: currentUser, isLoading } = useQuery({
    queryFn: () => usersService.getUserById(userId),
    queryKey: ["currentUser", userId],
  });

  const [isModalOpen, setisModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-zinc-700">
      <div className="container py-5 flex justify-between items-center">
        {!isLoading ? (
          <>
            <Button
              text={"Logout"}
              onClick={() => setisModalOpen(true)}
              className={
                "bg-red-500 text-white border-red-700 hover:bg-red-700"
              }
            />
            <button
              onClick={() => navigate("/user")}
              className="text-xl text-white font-semibold cursor-pointer"
            >
              {currentUser?.username}
            </button>
          </>
        ) : (
          <p className="text-white font-bold text-xl">Loading...</p>
        )}
      </div>
      {isModalOpen && (
        <Modal
          text={"Are you sure you want to logout?"}
          onClose={() => {
            setisModalOpen(false);
          }}
          onConfirm={authService.logout}
        />
      )}
    </header>
  );
};

export default Header;
