import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { eyeClosedIcon, eyeIcon } from "../constants/icons";
import { useEffect, useState } from "react";
import { authService } from "../services/api/authService";
import { useNavigate } from "react-router-dom";

const validationSchema = z.object({
  username: z.string().min(4).max(16),
  password: z.string().min(4).max(16),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(validationSchema) });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFocus("username");
  }, []);

  const onSubmit = async (data) => {
    try {
      setIsAuthError(false);
      const response = await authService.login(data);
      localStorage.setItem("accessToken", response.token);
      navigate("/");
    } catch (error) {
      setIsAuthError(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center border-1 border-gray-600 shadow-xl px-6 py-10 rounded-md"
    >
      <div className="space-y-2">
        <input
          {...register("username")}
          type="text"
          placeholder="Username"
          className="input"
        />
        <div className="min-h-[1.5rem] text-sm">
          <p className="text-red-500">{errors.username?.message}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="relative">
          <input
            {...register("password")}
            type={`${isPasswordVisible ? "text" : "password"}`}
            placeholder="Password"
            className="input"
          />
          <div
            onClick={() => {
              setIsPasswordVisible(!isPasswordVisible);
            }}
            className="absolute top-0 bottom-0 right-0 px-4 flex-center cursor-pointer"
          >
            {isPasswordVisible ? eyeIcon : eyeClosedIcon}
          </div>
        </div>
        <div className="min-h-[1.5rem] text-sm">
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
      </div>
      <div className="min-h-[1.5rem] text-sm">
        {isAuthError && <p className="text-red-500 text0sm">Login failed</p>}
      </div>
      <Button
        text={"Submit"}
        type={"submit"}
        isDisabled={isSubmitting}
        className={
          "w-full hover:bg-zinc-700 hover:text-white disabled:bg-gray-600 disabled:text-white"
        }
      />
    </form>
  );
};

export default LoginForm;
