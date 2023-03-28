import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { useLoginContext } from "../../contexts/LoginContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { ClipLoader } from "react-spinners";
import * as yup from "yup";
import { useUserLogin } from "../../hooks/useUserAuth";

const UserLoginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().min(8).required(),
});

const UserLogin = () => {
  const { changeStatus } = useLoginContext();

  const userLoginMutation = useUserLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserLoginSchema),
  });

  const onSubmit = (data) => {
    userLoginMutation.mutate(data);
  };

  useEffect(() => {
    if (userLoginMutation.isSuccess) {
      changeStatus();
      location.reload();
    }
  }, [userLoginMutation.isSuccess]);

  return (
    <article className="bg-white shadow-lg rounded-md py-5 px-10 w-[32rem]">
      <div className="flex justify-end items-center">
        <IoMdClose size={25} onClick={changeStatus} />
      </div>
      <section className="my-10">
        <h3 className="font-bold text-3xl text-center">Login</h3>
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
          {userLoginMutation.isError && (
            <p className="text-red-400">{userLoginMutation.error.message}</p>
          )}
          <button
            className="bg-dreamLabColor1 text-white rounded-md py-1.5 text-lg font-semibold mt-3
            flex items-center justify-center gap-2"
            type="submit">
            {userLoginMutation.isLoading && (
              <ClipLoader color="white" size={20} />
            )}
            Login
          </button>
        </form>
      </section>
    </article>
  );
};

export default UserLogin;
