import React, { useState } from "react";
import Switch from "react-switch";
import CreatePageTitle from "../../../components/admin/CreatePageTitle";
import InputForm from "../../../components/form/InputForm";
import TextareaForm from "../../../components/form/TextareaFrom";
import ChoosePlan from "./ChoosePlan";
import Sidebar from "../../../components/admin/SideBar";
import Header from "../../../components/admin/Header";

const CreateSubscription = () => {
  const [status, setStatus] = useState(false);
  const [choosePlan, setChoosePlan] = useState(false);
  const [plans, setPlans] = useState([]);

  return (
    <section >
      <div className="flex">
        <div className="w-2/5 ml-10  mt-10">
          <CreatePageTitle title="Create Subscription" />

          <form className="my-10 ml-10 ">
            <InputForm name="name" placeholder="Type Name" title="Plan Name" />
            <InputForm
              name="originalprice"
              placeholder="0 Ks"
              title="Original Price"
            />
            <InputForm name="saleprice" placeholder="0 Ks" title="Sale Price" />
            <section className="flex justify-between items-center gap-x-20 my-10">
              <p className="font-semibold text-lg">Schedule Sale</p>
              <Switch onChange={() => setStatus(!status)} checked={status} />
            </section>
            <section className="flex justify-between items-center gap-x-20 my-10">
              <p className="font-semibold text-lg">Active Status</p>
              <Switch onChange={() => setStatus(!status)} checked={status} />
            </section>
            <section className="flex justify-between items-center gap-x-20 my-10">
              <p className="font-semibold text-lg">Popular Sale</p>
              <Switch onChange={() => setStatus(!status)} checked={status} />
            </section>
            <div>
              <section
                className="rounded-md py-1.5 px-4 border-stoke border-2 w-full bg-white"
                onClick={() => setChoosePlan(true)}
              >
                Choose Plan
              </section>

              <p>{plans.length} Plan selected</p>
            </div>
            <TextareaForm
              title="Description"
              name="description"
              placeholder="Type Description"
            />
            <button className="btn-2 bg-dreamLabColor3 rounded-md py-2 my-8 flex items-center justify-center gap-x-3 w-full">
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
