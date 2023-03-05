import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CreatePageTitle = ({ title }) => {
  const navigate = useNavigate();
  return (
    <article className="flex items-center gap-x-20">
      <button
        className="flex gap-x-2 font-bold text-lg text-dreamLabColor1 "
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack size={25} />
        Back
      </button>
      <h3 className="font-semibold text-xl">{title}</h3>
    </article>
  );
};

export default CreatePageTitle;