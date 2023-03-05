import React from "react";
import { BiBell } from "react-icons/bi";

import Logo from "../../assets/Icon.svg";
import ProfileImg from "../../assets/profile.png";

const Header = () => {
  return (
    <nav className="navbar flex justify-between items-center w-full h-20 bg-white z-50 shadow-lg fixed">
      <div className="left-nav ml-10">
        <div className="logo-wrapper mb-2">
          <img src={Logo} alt="Dream Lab Logo" />
        </div>
      </div>
      <div className="navbar-title text-2xl font-bold tracking-wide truncate">
        Admin Dashboard
      </div>
      <div className="right-nav flex items-center justify-center mr-20">
        <div className="noti-icon bg-dreamLabColor1 rounded-full p-2 text-white relative">
          <BiBell className="w-5 h-5 md:w-6 md:h-6" />
          <div className="noti bg-red-500 border-r-2 border-w p-1 absolute right-0 top-0.5 rounded-full "></div>
        </div>
        <div className="profile ml-5 flex items-center justify-center">
          <figure className="mr-2">
            <img src={ProfileImg} alt="Profile Image" />
          </figure>
          <p className="profile-name font-medium">Christine Julian Wan</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
