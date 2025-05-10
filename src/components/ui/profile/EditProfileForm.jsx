import React, { useEffect } from "react";
import AnimatedTitle from "../AnimatedTitle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "../Spinner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usersService } from "../../../services/api/usersService";
import PasswordInput from "../inputs/PasswordInput";
import Button from "../buttons/Button";
import { useEditModalContext } from "../../../context/EditModalContext";
import { editUserSchema } from "../../../zod/schemas/editUserSchema";

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

  const queryClient = useQueryClient();

  const { data: currentUser, isLoading } = useQuery({
    queryFn: () => usersService.getUserById(userId),
    queryKey: ["currentUser", userId],
  });

  const updateUserMutation = useMutation({
    mutationFn: (data) => usersService.updateUserData(userId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["currentUser", userId]);
    },
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
    updateUserMutation.mutate(data);
    setEditModalVisible(false);
  });

  return (
    <div className="bg-white w-full max-w-[80vw] md:max-w-[35vw] p-8 rounded-md shadow-md relative">
      <AnimatedTitle className="text-zinc-900 text-lg md:text-xl mb-5">
        Edit Profile
      </AnimatedTitle>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <form className="space-y-4" onSubmit={handleConfirm}>
            <div className="space-y-2">
              <input {...register("username")} type="text" className="input" />
              <p className="error-message">{errors.username?.message}</p>
            </div>
            <div className="space-y-2">
              <input {...register("email")} type="text" className="input" />
              <p className="error-message">{errors.email?.message}</p>
            </div>
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
