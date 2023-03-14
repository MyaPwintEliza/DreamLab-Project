import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreatePlan } from "../../../hooks/usePlans";
import InputForm from "../../../components/form/InputForm";
import { ClipLoader } from "react-spinners";

const PlanSchema = yup.object({
  code: yup.string().required(),
  name: yup.string().required(),
});

const CreatePlan = ({ createStatus, setCreateStatus, refreshData }) => {
  const createPlanMutation = useCreatePlan();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(PlanSchema),
  });

  const onSubmit = async (data) => {
    console.log("create data: ", data);
    createPlanMutation.mutate(data);
  };

  useEffect(() => {
    if (createPlanMutation.isSuccess) {
      reset({ code: "", name: "" });
      refreshData();
      setCreateStatus(false);
    }
  }, [createPlanMutation.isSuccess]);

  return (
    <div
      className={`fixed top-0 bg-white h-full text-black right-0 z-50 bottom-0 w-[500px] shadow-lg p-10 ${
        createStatus ? "block" : "hidden"
      }`}
    >
      <section className="flex justify-between items-center">
        <h2 className="font-semibold text-3xl">Create Plan</h2>
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
        <InputForm
          title="Plan Code"
          id="code"
          name="code"
          placeholder="Type Plan Code"
          register={register}
          errors={errors}
        />
        <InputForm
          title="Plan Name"
          id="code"
          name="name"
          placeholder="Type Plan Name"
          register={register}
          errors={errors}
        />
        {createPlanMutation.isError && (
          <p className="text-red-400">{createPlanMutation.error.message}</p>
        )}
        <button className="bg-dreamLabColor2 py-2 my-8 flex items-center justify-center gap-x-3">
          {createPlanMutation.isLoading && (
            <ClipLoader color="white" size={20} />
          )}
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePlan;
