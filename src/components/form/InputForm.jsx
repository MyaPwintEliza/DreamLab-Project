import React from "react";

const InputForm = ({ title, name, type = "text", placeholder = "" }) => {
  return (
    <section className="w-full">
      <label htmlFor={name} className="font-semibold my-2 block">
        {title}
      </label>
      <input
        id={name}
        type={type}
        className="rounded-md py-1.5 px-4 border-stoke border-2 w-full"
        placeholder={placeholder}
      />
    </section>
  );
};

export default InputForm;
