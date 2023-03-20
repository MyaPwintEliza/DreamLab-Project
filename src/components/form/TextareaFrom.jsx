import React from "react";

const TextareaForm = ({ register, title, name, row = 7, placeholder }) => {
  return (
    <section>
      <label htmlFor={name} className="font-semibold my-2 block">
        {title}
      </label>
      <textarea
        {...register(name)}
        id={name}
        rows={row}
        className="rounded-md py-1.5 px-4 border-stoke border-2 w-full"
        placeholder={placeholder}
      ></textarea>
    </section> 
  );
};

export default TextareaForm;
