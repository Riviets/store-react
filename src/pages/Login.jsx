import LoginForm from "../components/ui/LoginForm";
import Button from "../components/ui/buttons/Button";
import { backIcon } from "../assets/icons/back";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className=" section-padding h-screen flex-center">
      <div className="container relative">
        <Button
          text={"Cancel"}
          className={
            "bg-white-50 text-lg !px-8 button-hover absolute -top-20 left-50"
          }
          onClick={() => navigate("/about")}
        />
        <div className="flex flex-col gap-5 items-center -translate-y-5">
          <p className="font-bold max-w-[50vw] text-3xl text-white-50">
            You should log in to continue!
          </p>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
