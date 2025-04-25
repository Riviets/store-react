import Button from "./Button";
import { authService } from "../../services/api/authService";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../../services/api/usersService";
import { useEffect } from "react";

const Header = () => {
  const userId = localStorage.getItem("userId");
  const { data: currentUser, isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => usersService.getUserById(userId),
    enabled: !!userId,
  });

  return (
    <header className="bg-zinc-700">
      <div className="container py-5 flex justify-between items-center">
        <Button
          text={"Logout"}
          onClick={authService.logout}
          className={"bg-red-500 text-white border-red-700 hover:bg-red-700"}
        />
        <p className="text-xl text-white font-semibold">
          {currentUser?.username}
        </p>
      </div>
    </header>
  );
};

export default Header;
