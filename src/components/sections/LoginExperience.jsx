import { arrowIcon } from "../../assets/icons/arrow";
import LoginScene from "../scenes/LoginScene/LoginScene";
import AnimatedTitle from "../ui/AnimatedTitle";
import LoginForm from "../ui/LoginForm";

const LoginExperience = () => {
  return (
    <section className="bg-zinc-900 py-15 md:py-30">
      <div className="container">
        <AnimatedTitle className={"mb-25"}>
          Login to start shopping!
        </AnimatedTitle>
        <div className="flex gap-5 justify-center flex-wrap items-stretch h-80 relative">
          <LoginForm />
          <LoginScene />
          <div className="text-white absolute right-40 -top-10 text-xl font-semibold hidden md:flex items-center gap-3">
            <div className="-rotate-90">{arrowIcon}</div> <p>Interactive</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginExperience;
