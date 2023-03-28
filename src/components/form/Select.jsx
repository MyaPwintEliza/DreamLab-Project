import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Select({ label, options, setOptions, defaultValues, errors }) {
  //   const [inputValue, setInputValue] = useState("");

  //   const handleInputChange = (event) => {
  //     setInputValue(event.target.value);
  //   };

  //   const handleInputBlur = () => {
  //     if (inputValue.trim() !== "" && !options.includes(inputValue)) {
  //       setOptions([...options, inputValue]);
  //     }
  //     setInputValue("");
  //   };

  //   const handleInputKeyDown = (event) => {
  //     if (event.key === "Enter") {
  //       event.preventDefault();
  //       if (inputValue.trim() !== "" && !options.includes(inputValue)) {
  //         setOptions([...options, inputValue]);
  //       }
  //       setInputValue("");
  //     }
  //   };

  const handleOnChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption !== "") {
      // const option = defaultValues.find((o) => o.name === selectedOption);
      setOptions([...options, selectedOption]);
      // setId([...id, option.id]);
    }
  };

  const handleRemoveOption = (option) => {
    setOptions(options.filter((o) => o !== option));
  };

  return (
    <div className="w-full">
      <label htmlFor={options} className="font-semibold my-2 block">
        {label}
      </label>

      <select
        required
        onChange={handleOnChange}
        for="label"
        className="rounded-md py-1.5 px-4 border-stoke border-2 w-full ">
        <option value="" disabled>
          Select...
        </option>
        {defaultValues.map((defaultValue) => (
          <option key={defaultValue.id} value={defaultValue.name}>
            {defaultValue.name}
          </option>
        ))}
      </select>
      <ul className="list-none">
        {options.map((option) => (
          <li
            className="mt-3 p-1 mr-5 inline-block border-2 border-grey2 text-textColor4  rounded-full cursor-pointer bg-[#f5f5f5]"
            key={option}>
            {option}
            <button onClick={() => handleRemoveOption(option)}>
              <IoMdClose className="text-red-600" />
            </button>
          </li>
        ))}
      </ul>
      {errors[label] && (
        <p className="text-red-500">{errors[label]?.message}</p>
      )}
    </div>
  );
}

export default Select;
