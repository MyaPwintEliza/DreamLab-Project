import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdImages } from "react-icons/io";
import * as yup from "yup";

import InputForm from "../../../components/form/InputForm";
import { ClipLoader } from "react-spinners";
import { useCreateCategory } from "../../../hooks/useCategories";

const CategorySchema = yup.object({
  name: yup.string().required(),
});

const CreateCategory = ({ createStatus, setCreateStatus, refreshData }) => {
  const createCategoryMutation = useCreateCategory();
  const [icon, setIcon] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CategorySchema),
  });

  const onSubmit = async (data) => {
    console.dir(icon[0]);
    const formData = new FormData();
    formData.append("name", data);
    formData.append("icon", icon);

    createCategoryMutation.mutate(formData);
  };

  useEffect(() => {
    if (createCategoryMutation.isSuccess) {
      reset({ name: "" });
      setIcon(null);
      refreshData();
      setCreateStatus(false);
    }
  }, [createCategoryMutation.isSuccess]);

  return (
    <div
      className={`fixed top-0 bg-white h-full text-black right-0 z-50 bottom-0 w-[500px] shadow-lg p-10 ${
        createStatus ? "block" : "hidden"
      }`}>
      <section className="flex justify-between items-center">
        <h2 className="font-semibold text-3xl">Create Category</h2>
        <AiOutlineClose
          size={25}
          onClick={() => setCreateStatus(false)}
          className="cursor-pointer"
        />
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 my-10">
        <div className="flex items-center">
          <div className="mr-3 flex items-center justify-center w-11 h-11 rounded-full bg-dreamLabColor2">
            <IoMdImages
              label="Choose file"
              labelPosition="before"
              size={35}></IoMdImages>
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              onChange={(e) => {
                if (e.target.files.length) {
                  setIcon(e.target.files);
                }
              }}
              required
              accept="image/*"
              id="icon"
              type="file"
              name="icon"
              className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
            />
          </label>
        </div>

        {errors.icon && <p className="text-red-500">{errors.icon?.message}</p>}

        <InputForm
          title="Category Name"
          id="name"
          name="name"
          placeholder="Enter Name"
          register={register}
          errors={errors}
        />
        {createCategoryMutation.isError && (
          <p className="text-red-400">{createCategoryMutation.error.message}</p>
        )}
        <button
          className="bg-dreamLabColor2 py-2 my-8 flex items-center justify-center gap-x-3"
          type="submit">
          {createCategoryMutation.isLoading && (
            <ClipLoader color="white" size={20} />
          )}
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
