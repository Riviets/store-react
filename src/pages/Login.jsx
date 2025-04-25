import { useForm } from "react-hook-form";
import LoginForm from "../components/ui/LoginForm";

const Login = () => {
  return (
    <section className="container section-padding h-screen flex-center">
      <div className="flex flex-col gap-5 items-center -translate-y-5">
        <p className="font-bold max-w-[50vw] text-3xl">
          You should log in to continue!
        </p>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
