import React from "react";
import { IoMdAddCircle } from "react-icons/io";

const AdminContentTitle = ({setCreateStatus, title, createTitle}) => {
  return (
    <section className="flex justify-between items-center">
      <h3 className="font-semibold text-2xl">{title}</h3>
      <button
        className="flex bg-dreamLabColor2 items-center py-2 px-10 gap-x-2 rounded-md"
        onClick={() => setCreateStatus(true)}>
        <IoMdAddCircle />
        {createTitle}
      </button>
    </section>
  );
};

export default AdminContentTitle;
