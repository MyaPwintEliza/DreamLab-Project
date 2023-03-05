import React from "react";

const PlanItem = ({setEditStatus,setDeleteStatus}) => {
  return (
    <section className="shadow-inner shadow-2xl flex justify-between items-center py-8 px-5 rounded-md my-5 w-full">
      <p className="text-lg font-medium">Video Plan</p>
      <div className="flex gap-x-5">
        <button className="bg-dreamLabColor2 py-2 px-6 rounded-md" onClick={() => setEditStatus(true)}>
          Edit
        </button>
        <button className="text-red-600 font-medium rounded-md" onClick={() => setDeleteStatus(true)}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default PlanItem;