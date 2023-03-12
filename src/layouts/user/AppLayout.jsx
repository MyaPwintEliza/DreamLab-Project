import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../../components/user/Footer";
import Navbar from "../../components/user/Navbar";

import UserLogin from "../../components/user/UserLogin";
import UserRegister from "../../components/user/UserRegister";
import { useLoginContext } from "../../contexts/LoginContext";
import { useRegisterContext } from "../../contexts/RegisterContext";

const AppLayout = () => {
//   const {
//     ContextValue: { registerStatus },
//   } = useRegisterContext();
//   const {
//     ContextValue: { loginStatus },
//   } = useLoginContext();
  return (
    <div>
      <Navbar />d
      <article>
        <Outlet />
      </article>
      <Footer />
     
        <div className="bg-textColor4 bg-opacity-50 fixed w-screen h-screen top-0 z-50 flex justify-center items-center">
          <UserRegister />
        </div>
      
  
        <div className="bg-textColor4 bg-opacity-50 fixed w-screen h-screen top-0 z-50 flex justify-center items-center">
          <UserLogin />
        </div>
      
    </div>
  );
};

export default AppLayout;
