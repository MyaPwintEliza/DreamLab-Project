import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import { usePlanData } from "../../../hooks/usePlans";

const ChoosePlan = ({
  getPlans,
  choosePlan,
  setChoosePlan,
  plans,
  setPlans,
}) => {
  const [selectPlans, setSelectPlan] = useState(plans);

  const { isLoading, isError, error, data } = usePlanData();

  const checkHandle = (e) => {
    const planCode = e.target.value;
    if (e.currentTarget.checked) {
      setSelectPlan([...selectPlans, { planCode, applyAll: false }]);
    } else {
      setSelectPlan(selectPlans.filter((plan) => plan.planCode !== planCode));
    }
  };

  const doneHandle = () => {
    setPlans(selectPlans);
    setChoosePlan(false);
  };

  if (isLoading) {
    return (
      <article className="flex items-center justify-center h-screen">
        <ClipLoader />
      </article>
    );
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div
      className={`fixed top-0 bg-white h-full text-black right-0 z-50 bottom-0 w-[500px] shadow-lg p-10 ${
        choosePlan ? "block" : "hidden"
      }`}
    >
      <section className="flex justify-between items-center">
        <h2 className="font-semibold text-3xl">Select Plan</h2>
        <AiOutlineClose size={25} onClick={() => setChoosePlan(false)} />
      </section>
      <div className="my-5 flex flex-col gap-y-4">
        {data.map((plan, key) => (
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              name=""
              id={plan.code}
              value={plan.code}
              onClick={checkHandle}
              checked={
                getPlans?.some((data) => data.planCode === plan.code) ||
                selectPlans.some((data) => data.planCode === plan.code)
              }
            />
            <label htmlFor={plan.code}>{plan.name}</label>
          </div>
        ))}
      </div>
      <button className="btn-2 bg-dreamLabColor2 rounded-md w-full py-2" onClick={doneHandle}>
        Done
      </button>
    </div>
  );
};

export default ChoosePlan;
