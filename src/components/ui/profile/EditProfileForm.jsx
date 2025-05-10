import React, { useEffect } from "react";
import AnimatedTitle from "../AnimatedTitle";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "../Spinner";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../../../services/api/usersService";
import PasswordInput from "../inputs/PasswordInput";
import Button from "../buttons/Button";
import { useEditModalContext } from "../../../context/EditModalContext";

const editUserSchema = z.object({
  username: z.string().min(4).max(12),
  email: z.string().email(),
  password: z.string().min(6).max(12),
});

const EditProfileForm = () => {
  const { setEditModalVisible } = useEditModalContext();

  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(editUserSchema) });

  const userId = localStorage.getItem("userId");

  const { data: currentUser, isLoading } = useQuery({
    queryFn: () => usersService.getUserById(userId),
    queryKey: ["currentUser", userId],
  });

  useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  useEffect(() => {
    if (currentUser) {
      reset({
        username: currentUser.username,
        email: currentUser.email,
        password: currentUser.password,
      });
    }
  }, [currentUser, reset]);

  const handleClose = () => {
    setEditModalVisible(false);
  };

  const handleConfirm = handleSubmit((data) => {
    // Тут ваша логіка для оновлення даних користувача
    console.log("Оновлені дані:", data);
    // Після успішного оновлення закриваємо модальне вікно
    setEditModalVisible(false);
  });

  return (
    <div className="bg-white max-w-[80vw] md:max-w-[35vw] p-8 rounded-md shadow-md relative">
      <AnimatedTitle className="text-zinc-900 text-lg md:text-xl mb-5">
        Edit Profile
      </AnimatedTitle>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <form className="space-y-8" onSubmit={handleConfirm}>
            <input {...register("username")} type="text" className="input" />
            <input {...register("email")} type="text" className="input" />
            <PasswordInput
              register={register}
              name="password"
              error={errors.password?.message}
            />
          </form>
          <div className="flex justify-between gap-3 mt-6">
            <Button
              text="Close"
              className="button-hover"
              onClick={handleClose}
            />
            <Button
              text="Confirm"
              className="button-hover"
              onClick={handleConfirm}
              type="submit"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default EditProfileForm;
