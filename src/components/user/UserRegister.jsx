import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const UserRegister = () => {
  return (
    <div className="bg-white shadow-lg mt-24 mx-auto rounded-3xl py-5 px-10 w-[32rem]">
      <div className="flex text-sm font-medium ">
        <MdKeyboardDoubleArrowLeft size={20} color="green" /> Back To Login
      </div>
      <div className="float-right">
        <IoMdClose />
      </div>
      <section className="my-14">
        <h3 className="font-bold text-3xl text-center">Register</h3>
        <p className="text-center font-medium text-lg py-2 text-textColor4">
          Login to find new experiences
        </p>
        <form action="" className="flex flex-col gap-y-5 mt-8">
          <input
            type="email"
            className="rounded-md py-1.5 px-4 border-stoke border-2 text-sm font-medium"
            placeholder="Email / Phone no"
          />
          <input
            id="password"
            type="password"
            className="rounded-md py-1.5 px-4 border-stoke border-2 text-sm font-medium"
            placeholder="Password"
          />
          <input
            id="password"
            type="password"
            className="rounded-md py-1.5 px-4 border-stoke border-2 text-sm font-medium"
            placeholder="Re-enter Password"
          />
          <button
            className="bg-dreamLabColor2 text-dreamLabColor-1 rounded-md py-1.5 text-lg font-semibold mt-3
            flex items-center justify-center gap-2"
            type="submit"
          >
            Register
          </button>
        </form>
      </section>
    </div>
  );
};

export default UserRegister;
