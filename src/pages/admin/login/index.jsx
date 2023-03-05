import React from "react";
import LoginImg from "../../../assets/adminlogin.png";
import Logo2 from "../../../assets/Logo2.svg";

function index() {
  const customStyles = {
    "form-header": "@apply font-semibold text-2xl my-10 w-full",
    "input-header": "@apply font-semibold text-xl",
    input: "@apply rounded-lg py-2 px-4 border-stoke border-2",
  };

  return (
    <section className="grid grid-cols-7 h-screen">
      <div className="bg-[#E6FBFF] grid items-center justify-center col-span-3">
        <img src={LoginImg} alt="Login Image" />
      </div>
      <div className="col-span-4 flex flex-col items-center justify-center px-36">
        <figure>
          <img src={Logo2} className="w-4/5" />
        </figure>
        <h2 className={customStyles["form-header"]}>
          Welcome to Dreamlab admin
        </h2>
        <form className="flex flex-col gap-y-5 w-full">
          <div className="flex flex-col gap-y-3">
            <label className={customStyles["input-header"]}>Email</label>
            <input
              type="email"
              className={customStyles.input}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label className={customStyles["input-header"]}>Password</label>
            <input
              type="password"
              className={customStyles.input}
              placeholder="Enter your password"
            />
          </div>

          <button
            className="bg-dreamLabColor1 text-white rounded-lg py-2 text-lg font-semibold mt-3
 w-1/5"
            type="submit">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
}

export default index;
