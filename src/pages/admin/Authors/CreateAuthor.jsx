import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputForm from "../../../components/form/InputForm";
import { ClipLoader } from "react-spinners";
import Switch from 'react-switch';

const AuthorSchema = yup.object({
  name: yup.string().required(),
});

const CreateAuthor = ({ createStatus, setCreateStatus, refreshData, mutation }) => {
  const [active, setActive] = useState(false);
  const createAuthorMutation = mutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(AuthorSchema),
  });

  const onSubmit = async (data) => {
    console.log("create data: ", data);
    active ? data['status'] = "a" : data['status']= "p";
    createAuthorMutation.mutate(data);
  };

  useEffect(() => {
    if (createAuthorMutation.isSuccess) {
      reset({ name: "" });
      refreshData();
      setCreateStatus(false);
    }
  }, [createAuthorMutation.isSuccess]);

  return (
    <div
      className={`fixed top-0 bg-white h-full text-black right-0 z-50 bottom-0 w-[500px] shadow-lg p-10 ${
        createStatus ? "block" : "hidden"
      }`}
    >
      <section className="flex justify-between items-center">
        <h2 className="font-semibold text-3xl">Create Book Author</h2>
        <AiOutlineClose
          size={25}
          onClick={() => setCreateStatus(false)}
          className="cursor-pointer"
        />
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 my-10"
      >
        <section className="flex items-center gap-x-20 my-10">
              <p className="font-semibold text-lg">Active Status</p>
              <Switch onChange={() => setActive(!active)} checked={active} />
        </section>
        <InputForm
          title="Author Name"
          id="name"
          name="name"
          placeholder="Type Author Name"
          register={register}
          errors={errors}
        />
        {createAuthorMutation.isError && (
          <p className="text-red-400">{createAuthorMutation.error.message}</p>
        )}
        <button className="bg-dreamLabColor2 py-2 my-8 flex items-center justify-center gap-x-3">
          {createAuthorMutation.isLoading && (
            <ClipLoader color="white" size={20} />
          )}
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateAuthor;
