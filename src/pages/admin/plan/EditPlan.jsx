import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import InputForm from "../../../components/form/InputForm";
import { useUpdatePlan } from "../../../hooks/usePlans";

const EditPlan = ({ editStatus, editPlan, setEditStatus, refreshData }) => {
  const updatePlanMutation = useUpdatePlan();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    console.log('edit data: ', data);
    updatePlanMutation.mutate(data);
  };

  useEffect(() => {
    setValue("code", editPlan.code);
    setValue("name", editPlan.name);
  }, [editPlan]);

  useEffect(() => {
    if (updatePlanMutation.isSuccess) {
      refreshData();
      setEditStatus(false);
    }
  }, [updatePlanMutation.isSuccess]);

  return (
    <div
      className={`fixed top-0 bg-white h-full text-black right-0 z-50 bottom-0 w-[500px] shadow-lg p-10 ${
        editStatus ? "block" : "hidden"
      }`}
    >
      <section className="flex justify-between items-center">
        <h2 className="font-semibold text-3xl">Edit Plan</h2>
        <AiOutlineClose size={25} onClick={() => setEditStatus(false)} />
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 my-10"
      >
        <InputForm
          title="Plan Code"
          name="code"
          placeholder="Type Plan Code"
          register={register}
          errors={errors}
        />
        <InputForm
          title="Plan Name"
          name="name"
          placeholder="Type Plan Name"
          register={register}
          errors={errors}
        />
        {updatePlanMutation.isError && (
          <p className="text-red-400">{updatePlanMutation.error.message}</p>
        )}
        <button
          className="bg-dreamLabColor2 py-2 my-8 flex items-center justify-center gap-x-3"
          type="submit"
        >
          {updatePlanMutation.isLoading && (
            <ClipLoader color="white" size={20} />
          )}
          Save
        </button>
      </form>
    </div>
  );
};

export default EditPlan;