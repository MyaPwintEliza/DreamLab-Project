import React from "react";
import { IoMdAddCircle } from "react-icons/io";

const AdminContentTitle = ({
  setCreateStatus,
  title,
  createTitle,
  total = "",
}) => {
  return (
    <section className="flex justify-between items-center">
      <div className="flex justify-center items-center">
        <h3 className="font-semibold text-2xl mr-5">{title}</h3>
        <p className="font-semibold">
          {total == "" ? null : ` total : ${total}`}
        </p>
      </div>
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
