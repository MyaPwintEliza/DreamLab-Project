import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdImages } from "react-icons/io";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import InputForm from "../../../components/form/InputForm";
import { useUpdateCategory } from "../../../hooks/useCategories";

const EditCategory = ({
  editStatus,
  editCategory,
  setEditStatus,
  refreshData,
}) => {
  const updateCategoryMutation = useUpdateCategory();

  const [icon, setIcon] = useState(null);

  const handleIconChange = (e) => {
    if (e.target.files.length) {
      setIcon(e.target.files);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("id", data.id.toString());
    formData.append("icon", icon[0], icon[0].name);
    updateCategoryMutation.mutate(formData);
  };

  useEffect(() => {
    setValue("id", editCategory?.id);
    setValue("icon", editCategory?.icon);
    setValue("name", editCategory?.name);
  }, [editCategory]);

  useEffect(() => {
    if (updateCategoryMutation.isSuccess) {
      refreshData();
      setEditStatus(false);
    }
  }, [updateCategoryMutation.isSuccess]);

  return (
    <div
      className={`fixed top-0 bg-white h-full text-black right-0 z-50 bottom-0 w-[500px] shadow-lg p-10 ${
        editStatus ? "block" : "hidden"
      }`}>
      <section className="flex justify-between items-center">
        <h2 className="font-semibold text-3xl">Edit Category</h2>
        <AiOutlineClose size={25} onClick={() => setEditStatus(false)} />
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
              required
              onChange={handleIconChange}
              accept="image/*"
              id="icon"
              type="file"
              name="icon"
              class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
            />
          </label>
          {errors.icon && (
            <p className="text-red-500">{errors.icon?.message}</p>
          )}
        </div>
        <InputForm
          title="Category Name"
          name="name"
          placeholder="Type Category Name"
          register={register}
          errors={errors}
        />
        {updateCategoryMutation.isError && (
          <p className="text-red-400">{updateCategoryMutation.error.message}</p>
        )}
        <button
          className="bg-dreamLabColor2 py-2 my-8 flex items-center justify-center gap-x-3"
          type="submit">
          {updateCategoryMutation.isLoading && (
            <ClipLoader color="white" size={20} />
          )}
          Save
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
