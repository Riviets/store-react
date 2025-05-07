import { useNavigate } from "react-router-dom";
import Button from "../components/ui/buttons/Button";
import LayoutLoader from "../components/LayoutLoader";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/api/usersService";
import UserData from "../components/ui/UserData";
import UserCart from "../components/ui/UserCart";
import AnimatedTitle from "../components/ui/AnimatedTitle";

const UserPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  if (!userId) {
    navigate("/login");
    return null;
  }
  const {
    data: currentUser,
    isLoading: userLoading,
    error: userFetchError,
  } = useQuery({
    queryFn: () => usersService.getUserById(userId),
    queryKey: ["currentUser", userId],
  });
  const {
    data: userCart,
    isLoading: cartLoading,
    error: cartFetchError,
  } = useQuery({
    queryFn: () => usersService.getUserCart(userId),
    queryKey: ["currentUserCart"],
  });

  if (userFetchError) throw userFetchError;
  if (cartFetchError) throw cartFetchError;

  return (
    <LayoutLoader
      isLoading={userLoading || cartLoading}
      addHeader={true}
      addFooter={true}
    >
      <section className="container section-padding">
        <Button
          text={"Go to shop"}
          className={"button-hover bg-white-50 mb-5 md:mb-10"}
          onClick={() => navigate("/shop")}
        />
        <div className="flex flex-col gap-8 md:gap-12">
          <AnimatedTitle>Profile</AnimatedTitle>
          <UserData userData={currentUser} />
          <UserCart cart={userCart} />
        </div>
      </section>
    </LayoutLoader>
  );
};

export default UserPage;
