import React from "react";

import { BiBell } from "react-icons/bi";

import Logo from "../../assets/Icon.svg";
import ProfileImg from "../../assets/profile.png";

const customStyles = {
  navbar:
    "@apply  flex justify-between items-center w-full h-20 bg-white z-50 shadow-lg fixed",
  "navbar-title": "@apply  text-2xl font-bold tracking-wide truncate",
  "right-nav": "@apply flex items-center justify-center mr-20",
  "noti-icon": "@apply bg-dreamLabColor1 rounded-full p-2 text-white relative",
  "noti-badge":
    "@apply  bg-red-500 border-r-2 border-w p-1 absolute right-0 top-0.5 rounded-full",
  "profile-wrapper": "@apply ml-5 flex items-center justify-center",
};

const Header = () => {
  return (
    <nav className={customStyles.navbar}>
      <div className="left-nav ml-10">
        <div className="logo-wrapper mb-2">
          <img src={Logo} alt="Dream Lab Logo" />
        </div>
      </div>
      <div className={customStyles["navbar-title"]}>Admin Dashboard</div>
      <div className={customStyles["right-nav"]}>
        <div className={customStyles["noti-icon"]}>
          <BiBell className="w-5 h-5 md:w-6 md:h-6" />
          <div className={customStyles["noti-badge"]}></div>
        </div>
        <div className={customStyles["profile-wrapper"]}>
          <figure className="mr-2">
            <img src={ProfileImg} alt="Profile Image" />
          </figure>
          <p className="font-medium">Christine Julian Wan</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
