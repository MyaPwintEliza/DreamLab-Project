import React from "react";

import { useNavigate } from "react-router-dom";
import LoginImg from "../../../assets/adminlogin.png";
import Logo2 from "../../../assets/Logo2.svg";

function index() {
  const customStyles = {
    "form-header": "@apply font-bold text-2xl w-full ",
    "input-header": "@apply font-semibold text-xl mt-10 w-full",
    input: "@apply rounded-lg py-2 px-4 border-stoke border-2 mt-5",
    signin:
      "@apply bg-dreamLabColor1 text-white rounded-lg py-2 text-lg font-semibold mt-10 w-1/5",
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate("/register");
  }

  return (
    <section className="flex h-screen items-center">
      <div className="left w-5/12 flex justify-center items-center bg-[#E6FBFF] h-full">
        <figure>
          <img src={LoginImg} alt="" />
        </figure>
      </div>
      <div className="right mx-auto w-1/2 h-full flex justify-center flex-col items-center mb-32">
        <figure>
          <img src={Logo2} />
        </figure>
        <form className="flex flex-col w-full px-10 mt-10">
          <h1 className={customStyles["form-header"]}>
            Welcome to DreamLab Admin
          </h1>
          <div className="email flex flex-col">
            <label htmlFor="" className={customStyles["input-header"]}>
              Email
            </label>
            <input
              placeholder="Enter your email"
              type="text"
              className={customStyles.input}
            />
          </div>
          <div className="password flex flex-col">
            <label htmlFor="password" className={customStyles["input-header"]}>
              Password
            </label>
            <input
              placeholder="Enter your password"
              type="password"
              className={customStyles.input}
            />
          </div>
          <button className={customStyles.signin} type="submit">
            Sign in
          </button>

          <p className="mt-10">
            Don't have an account?
            <span
              className="ml-2 text-xl text-dreamLabColor1 underline"
              onClick={handleClick}>
              Register Now
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}

export default index;
