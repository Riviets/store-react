import { useForm } from "react-hook-form";
import Button from "./buttons/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { authService } from "../../services/api/authService";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../../services/api/usersService";
import { loginSchema } from "../../zod/schemas/loginSchema";
import PasswordInput from "./inputs/PasswordInput";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const { data: users, error: usersFetchError } = useQuery({
    queryKey: ["users"],
    queryFn: usersService.getAllUsers,
  });

  if (usersFetchError) {
    throw usersFetchError;
  }

  const [isAuthError, setIsAuthError] = useState(false);
  const navigate = useNavigate();

  const authenticateUser = async (userData) => {
    try {
      setIsAuthError(false);
      const { token } = await authService.login(userData);
      const currentUser = users.filter(
        (user) => user.username === userData.username
      );
      const userId = currentUser[0].id;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("userId", userId);
      navigate("/shop");
    } catch (error) {
      setIsAuthError(true);
    }
  };

  const onSubmit = async (data) => {
    authenticateUser(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center border-1 border-gray-600 shadow-xl px-6 py-10 rounded-md bg-white"
    >
      <div className="space-y-2">
        <input
          {...register("username")}
          type="text"
          placeholder={"donero"}
          className="input"
        />
        <p className="error-message">{errors.username?.message}</p>
      </div>
      <PasswordInput
        register={register}
        name="password"
        placeholder="ewedon"
        error={errors.password?.message || (isAuthError && "Login failed")}
      />
      <Button
        text={"Submit"}
        type={"submit"}
        isDisabled={isSubmitting}
        className={
          "w-full button-hover disabled:bg-gray-600 disabled:text-white"
        }
      />
    </form>
  );
};

export default LoginForm;
