import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

function UserLogin() {
  return (
    <div className="py-5 px-10 w-[32rem] mx-auto mt-20 bg-white shadow-lg rounded-3xl ">
      <div className="float-right">
        <IoMdClose />
      </div>
      <section className="my-10 ">
        <h3 className="text-center font-sans">Login</h3>
        <p className="text-center font-medium text-lg py-2 text-textColor4  ">
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
          <a className="text-xs font-thin">Forget password?</a>
          <button
            className="bg-dreamLabColor2 text-dreamLabColor-1 rounded-md py-1.5 text-lg font-medium mt-3 
            flex items-center justify-center gap-2"
            type="submit"
          >
            Login
          </button>
          <div className="flex mx-auto">
            <AiOutlineLine />
            <p className="flex text-base font-medium mt-1">Or Sign in with</p>
            <AiOutlineLine />
          </div>
          <button
            className=" text-dreamLabColor4 border rounded-md py-1.5 text-lg font-thin w-48 mx-auto bg-transparent
            flex items-center justify-center gap-2"
            type="submit"
          >
            <AiFillGoogleCircle /> Google
          </button>
          <div>
            <p className="text-sm font-thin text-center">
              Don't have an account?&nbsp;&nbsp;
              <span className="font-semibold text-dreamLabColor4">
                Request Now
              </span>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UserLogin;
