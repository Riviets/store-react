import { useNavigate } from "react-router-dom";
import Button from "../components/ui/buttons/Button";
import WithLoader from "../components/WithLoader";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/api/usersService";
import UserData from "../components/ui/UserData";
import UserCart from "../components/ui/UserCart";
import AnimatedTitle from "../components/ui/AnimatedTitle";
import LogoutButton from "../components/ui/buttons/LogoutButton";

const UserPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  if (!userId) {
    navigate("/login");
    return null;
  }
  const { data: currentUser, isLoading: userLoading } = useQuery({
    queryFn: () => usersService.getUserById(userId),
    queryKey: ["currentUser", userId],
  });
  const { data: userCart, isLoading: cartLoading } = useQuery({
    queryFn: () => usersService.getUserCart(userId),
    queryKey: ["currentUserCart"],
  });

  return (
    <WithLoader isLoading={userLoading || cartLoading} addHeader={true}>
      <section className="container section-padding">
        <Button
          text={"Back"}
          className={"button-hover bg-white-50 mb-5 md:mb-10"}
          onClick={() => navigate(-1)}
        />
        <div className="flex flex-col gap-8 md:gap-12">
          <AnimatedTitle>Profile</AnimatedTitle>
          <UserData userData={currentUser} />
          <AnimatedTitle>Cart</AnimatedTitle>
          <UserCart cart={userCart} />
          <LogoutButton className={"self-start"} />
        </div>
      </section>
    </WithLoader>
  );
};

export default UserPage;
