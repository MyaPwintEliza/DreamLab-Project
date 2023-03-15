import React from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { useRegisterContext } from "../../contexts/RegisterContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserRegister } from "../../hooks/useUserAuth";

const UserRegisterSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().min(8).required(),
});

const UserRegister = () => {
  const { changeStatus } = useRegisterContext();

  const userRegisterMutation = useUserRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserRegisterSchema),
  });

  const onSubmit = (data) => {
    userRegisterMutation.mutate(data);
  };

  return (
    <article className="bg-white shadow-lg rounded-md py-5 px-10 w-[32rem]">
      <div className="flex justify-end items-center">
        <IoMdClose size={25} onClick={changeStatus} />
      </div>
      <section className="my-10">
        <h3 className="font-bold text-3xl text-center">Register</h3>
        <p className="text-center font-medium text-lg py-2 text-textColor4">
          Login to find new experiences
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5 mt-8">
          <input
            id="email"
            type="email"
            className="rounded-md py-1.5 px-4 border-stoke border-2"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-400">{errors.email.message}</p>
          )}
          <input
            id="password"
            type="password"
            className="rounded-md py-1.5 px-4 border-stoke border-2"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-400">{errors.password.message}</p>
          )}
          {userRegisterMutation.isError && (
            <p className="text-red-400">{userRegisterMutation.error.message}</p>
          )}
          <button
            className="bg-dreamLabColor1 text-white rounded-md py-1.5 text-lg font-semibold mt-3
            flex items-center justify-center gap-2"
            type="submit">
            Register
          </button>
        </form>
      </section>
    </article>
  );
};

export default UserRegister;
