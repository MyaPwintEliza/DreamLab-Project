import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import InputForm from "../../../components/form/InputForm";
import Switch from 'react-switch';

const EditArticleAuthor = ({ editStatus, editAuthor, setEditStatus, refreshData, mutation }) => {
  const [active, setActive] = useState(false);
  const updateAuthorMutation = mutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    console.log('edit data: ', data);
    active ? data['status'] = "a" : data['status']= "p";
    updateAuthorMutation.mutate(data);
  };

  useEffect(() => {
    setValue("id", editAuthor.id);
    setValue("status", active == 'a'? 'a' : 'p');
    setValue("name", editAuthor.name);
  }, [editAuthor]);

  useEffect(() => {
    if (updateAuthorMutation.isSuccess) {
      refreshData();
      setEditStatus(false);
    }
  }, [updateAuthorMutation.isSuccess]);

  return (
    <div
      className={`fixed top-0 bg-white h-full text-black right-0 z-50 bottom-0 w-[500px] shadow-lg p-10 ${
        editStatus ? "block" : "hidden"
      }`}
    >
      <section className="flex justify-between items-center">
        <h2 className="font-semibold text-3xl">Edit Author</h2>
        <AiOutlineClose size={25} onClick={() => setEditStatus(false)} />
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 my-10"
      >
        {/* <InputForm
          title="Author Status"
          name="status"
          placeholder="Type Author Status"
          register={register}
          errors={errors}
        /> */}
        <section className="flex items-center gap-x-20 my-10">
              <p className="font-semibold text-lg">Active Status</p>
              <Switch onChange={() => setActive(!active)} checked={active} />
        </section>
        <InputForm
          title="Author Name"
          name="name"
          placeholder="Type Author Name"
          register={register}
          errors={errors}
        />
        {updateAuthorMutation.isError && (
          <p className="text-red-400">{updateAuthorMutation.error.message}</p>
        )}
        <button
          className="bg-dreamLabColor2 py-2 my-8 flex items-center justify-center gap-x-3"
          type="submit"
        >
          {updateAuthorMutation.isLoading && (
            <ClipLoader color="white" size={20} />
          )}
          Save
        </button>
      </form>
    </div>
  );
};

export default EditArticleAuthor;