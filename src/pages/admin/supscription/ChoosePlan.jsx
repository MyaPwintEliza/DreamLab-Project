import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ChoosePlan = ({ choosePlan, setChoosePlan, plans, setPlans }) => {
  const [selectPlans, setSelectPlan] = useState(plans);

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

  return (
    <div
      className={`fixed top-0 bg-white h-full text-black right-0 z-50 bottom-0 w-[500px] shadow-lg p-10 ${
        choosePlan ? "block" : "hidden"
      }`}
    >
      <section className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">Select Plan</h2>
        <AiOutlineClose size={25} onClick={() => setChoosePlan(false)} />
      </section>
      <div className="my-5 flex flex-col gap-y-4">
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            name=""
            id="selectall"
            value="v"
            onClick={checkHandle}
            
          />
          <label htmlFor="selectall">Select All</label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            name=""
            id="Book"
            value="v"
            onClick={checkHandle}
          />
          <label htmlFor="Book">Books Plan</label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            name=""
            id="article"
            value="v"
            onClick={checkHandle}
          />
          <label htmlFor="article">Articles Plan</label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            name=""
            id="podcast"
            value="v"
            onClick={checkHandle}
          />
          <label htmlFor="podcast">Podcasts Plan</label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            name=""
            id="video"
            value="v"
            onClick={checkHandle}
          />
          <label htmlFor="video">Videos Plan</label>
        </div>
      </div>
      <button className="btn-2 bg-dreamLabColor3 w-full py-2" onClick={doneHandle}>
        Done
      </button>
    </div>
  );
};

export default ChoosePlan;
