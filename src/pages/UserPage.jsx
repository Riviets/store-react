import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import WithLoader from "../components/WithLoader";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/api/usersService";
import UserData from "../components/ui/UserData";
import { useEffect } from "react";

const UserPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const { data: currentUser, isLoading } = useQuery({
    queryFn: () => usersService.getUserById(userId),
    queryKey: ["currentUser", userId],
  });

  return (
    <WithLoader isLoading={isLoading} addHeader={true}>
      <section className="container section-padding">
        <Button
          text={"Back"}
          className={"button-hover bg-white-50 mb-10"}
          onClick={() => navigate(-1)}
        />
        <UserData userData={currentUser} />
      </section>
    </WithLoader>
  );
};

export default UserPage;
