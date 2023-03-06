import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../../components/user/Footer";
import NavBar from "../../components/user/NavBar";
import UserLogin from "../../components/user/UserLogin";
import UserRegister from "../../components/user/UserRegister";

const AppLayout = () => {
  return (
    <div>
      <NavBar />
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
