import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Switch from "react-switch";
import { AiOutlineClose } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import CreatePageTitle from "../../../components/admin/CreatePageTitle";
import { SubscriptionSchema } from "./CreateSubscription";
import InputForm from "../../../components/form/InputForm";
import TextareaFrom from "../../../components/form/TextareaFrom";
import ChoosePlan from "./ChoosePlan";
import {
  useRemovePlan,
  useSubscriptionData,
  useUpdateSubscription,
} from "../../../hooks/useSubscriptions";

const EditSubscription = () => {
  const { id } = useParams();

  const [status, setStatus] = useState(false);
  const [choosePlan, setChoosePlan] = useState(false);
  const [getPlans, setGetPlans] = useState([]);
  const [plans, setPlans] = useState([]);

  const {
    isLoading: isSubscriptionLoading,
    isSuccess: isSubscriptionSuccess,
    data: subscriptionData,
    refetch: subscriptionRefetch,
  } = useSubscriptionData(id);

  const removePlanMutation = useRemovePlan();

  const updateSubscriptionMutation = useUpdateSubscription();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SubscriptionSchema),
  });

  // remove plan
  const planRemoveHandler = async (planId) => {
    removePlanMutation.mutate(planId);
  };

  useEffect(() => {
    if (removePlanMutation.isSuccess) {
      subscriptionRefetch();
    }
  }, [removePlanMutation.isSuccess]);

  const onSubmit = async (data) => {
    data["id"] = subscriptionData.id;
    if (status) {
      data["status"] = "a";
    } else {
      data["status"] = "p";
    }
    data["plans"] = plans;

    updateSubscriptionMutation.mutate(data);
  };

  useEffect(() => {
    if (isSubscriptionSuccess) {
      setValue("name", subscriptionData?.name);
      setValue("stackTitle", subscriptionData?.stackTitle);
      setValue("originalPrice", subscriptionData?.originalPrice);
      setValue("salePrice", subscriptionData?.salePrice);
      setValue("description", subscriptionData?.description);
      setValue("subscribeLength", subscriptionData?.subscribeLength);
      setValue("subscribeType", subscriptionData?.subscribeType);

      setStatus(subscriptionData?.status === "a" ? true : false);
      setGetPlans(subscriptionData?.subscriptionPlans);
    }
  }, [isSubscriptionSuccess, subscriptionData, setValue]);
  return (
    <section>
      <div className="flex ">
        <div className="w-3/5 ml-10  mt-10">
          <CreatePageTitle title="Edit Subscription" />
          <form action="" onSubmit={handleSubmit(onSubmit)} className="my-10">
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
                  className="font-semibold my-2 block"
                >
                  Subscription Length Type
                </label>
                <select
                  id="subscribeType"
                  className="rounded-md py-1.5 px-4 border-stoke border-2 w-full bg-white"
                  {...register("subscribeType")}
                >
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
                onClick={() => setChoosePlan(true)}
              >
                Choose Plan
              </section>
              <p>{plans.length + getPlans.length} Plan selected</p>
              <div className="flex gap-5 my-5">
                {getPlans.map((plan, key) => (
                  <div className="rounded-full py-1.5 px-4 border-stoke border-2 bg-white flex items-center gap-x-5">
                    {plan.plan.name}
                    <div>
                      <AiOutlineClose
                        className="font-semibold hover:cursor-pointer"
                        onClick={() => planRemoveHandler(plan.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {updateSubscriptionMutation.isError && (
              <ErrorMessage
                message={updateSubscriptionMutation.error.message}
              />
            )}
            <button
              className="btn-2 bg-dreamLabColor2 rounded-md py-2 my-8 flex items-center justify-center gap-x-3 w-full"
              type="submit"
            >
              {updateSubscriptionMutation.isLoading && (
                <ClipLoader color="white" size={20} />
              )}
              Save
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

export default EditSubscription;
