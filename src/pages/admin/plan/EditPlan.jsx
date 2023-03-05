import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import InputForm from "../../../components/form/InputForm";

const EditPlan = ({ editStatus, editPlan, setEditStatus, refreshData }) => {
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
      <form action="" className="flex flex-col gap-y-5 my-10">
        <InputForm title="Plan Code" name="code" placeholder="Type Plan Code" />
        <InputForm title="Plan Name" name="name" placeholder="Type Plan Name" />
        <button
          className="btn-2 py-2 my-8 flex items-center justify-center gap-x-3"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditPlan;