import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import CreatePageTitle from "../../../components/admin/CreatePageTitle";
import InputForm from "../../../components/form/InputForm";
import TextareaFrom from "../../../components/form/TextareaFrom";
import ChoosePlan from "./ChoosePlan";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateSubscription,
  useRemovePlan,
} from "../../../hooks/useSubscriptions";
import { ClipLoader } from "react-spinners";
import ErrorMessage from "../../../components/form/ErrorMessage";

const CreateSubscription = () => {
  const SubscriptionSchema = yup.object({
    name: yup.string().required(),
    stackTitle: yup.string().required(),
    originalPrice: yup.number().required(),
    salePrice: yup.number().required(),
    description: yup.string().required(),
    subscribeLength: yup.number().required(),
    subscribeType: yup.string().required(),
  });

  const [status, setStatus] = useState(false);
  const [choosePlan, setChoosePlan] = useState(false);
  const [plans, setPlans] = useState([]);

  const createSubscriptionMutation = useCreateSubscription();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(SubscriptionSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      if (status) {
        data["status"] = "a";
      } else {
        data["status"] = "p";
      }
      data["plans"] = plans;
      createSubscriptionMutation.mutate(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onError = (errors, e) => console.log(errors, e);

  const removePlanMutation = useRemovePlan();

  useEffect(() => {
    if (removePlanMutation.isSuccess) {
      handleRefresh();
    }
  }, [removePlanMutation.isSuccess]);

  return (
    <section>
      <div className="flex">
        <div className="w-2/5 ml-10  mt-10">
          <CreatePageTitle title="Create Subscription" />

          <form onSubmit={handleSubmit(onSubmit, onError)} className="my-10">
            <InputForm
              title="Subscription Name"
              name="name"
              errors={errors}
              placeholder="Type name"
              register={register}
            />
            <InputForm
              title="Stack Title"
              name="stackTitle"
              errors={errors}
              placeholder="Type stack title"
              register={register}
            />
            <InputForm
              title="Original Price"
              name="originalPrice"
              type="number"
              errors={errors}
              placeholder="0 Ks"
              register={register}
            />
            <InputForm
              title="Sale Price"
              name="salePrice"
              type="number"
              errors={errors}
              placeholder="0 Ks"
              register={register}
            />
            <article className="flex gap-x-10">
              <InputForm
                title="Subscription Length"
                name="subscribeLength"
                type="number"
                errors={errors}
                placeholder="1"
                register={register}
              />
              <section className="w-full">
                <label
                  htmlFor="subscribeType"
                  className="font-semibold my-2 block">
                  Subscription Length Type
                </label>
                <select
                  id="subscribeType"
                  className="rounded-md py-1.5 px-4 border-stoke border-2 w-full bg-white"
                  {...register("subscribeType")}>
                  <option value="d" selected>
                    Day
                  </option>
                  <option value="m">Month</option>
                  <option value="y">Year</option>
                </select>
                {errors["subscribeType"] && (
                  <p className="text-red-500">
                    {errors["subscribeType"]?.message}
                  </p>
                )}
              </section>
            </article>
            <TextareaFrom
              title="Description"
              name="description"
              placeholder="Type Description"
              errors={errors}
              register={register}
            />
            <section className=" grid grid-cols-2 my-5">
              <p className="font-semibold text-lg">Active Status</p>
              <Switch onChange={() => setStatus(!status)} checked={status} />
            </section>
            <div>
              <section
                className="rounded-md py-1.5 px-4 border-stoke border-2 w-full bg-white"
                onClick={() => setChoosePlan(true)}>
                Choose Plan
              </section>
              <p>{plans.length} Plan selected</p>
            </div>
            {createSubscriptionMutation.isError && (
              <ErrorMessage
                message={createSubscriptionMutation.error.message}
              />
            )}
            <button
              type="submit"
              onClick={() => console.log("clicked")}
              className="btn-2 bg-dreamLabColor2 rounded-md font-medium py-2 my-8 flex items-center justify-center gap-x-3 w-full">
              {createSubscriptionMutation.isLoading && (
                <ClipLoader color="white" size={20} />
              )}
              Create
            </button>
          </form>
        </div>
      </div>
      <ChoosePlan
        choosePlan={choosePlan}
        setChoosePlan={setChoosePlan}
        plans={plans}
        setPlans={setPlans}
      />
    </section>
  );
};

export default CreateSubscription;
