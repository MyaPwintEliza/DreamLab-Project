import React, { useState } from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdLocalLibrary, MdClear } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiLogOutCircle, BiMenuAltLeft } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";

import Logo from "../../assets/Icon.svg";
import Logo2 from "../../assets/Logo2.svg";
import { Link } from "react-router-dom";

import { useUserDataContext } from "../../contexts/UserDataContext";

import Profile from "../../assets/profile.png";
import { useRegisterContext } from "../../contexts/RegisterContext";
import { useLoginContext } from "../../contexts/LoginContext";

const NavBar = () => {
  const { changeStatus: changeRegisterStatus } = useRegisterContext();
  const { changeStatus: changeLoginStatus } = useLoginContext();
  const { user, logOut } = useUserDataContext();

  const [aside, setAside] = useState(false);
  const [userBox, setUserBox] = useState(false);

  const toggleAside = () => {
    setAside(!aside);
  };

  const sidebarClose = () => {
    setAside(false);
  };

  return (
    <>
      <div className="sticky top-0  bg-white z-50 drop-shadow-xl mt-0 ">
        <nav className="flex justify-between py-3.5 md:py-7 items-center container mx-auto mt-0 px-5 md:px-0">
          <BiMenuAltLeft
            className="block md:hidden"
            size={35}
            onClick={toggleAside}
          />
          <ul className="flex items-center gap-10">
            <li>
              <img src={Logo} alt="" />
            </li>
            <NavItem
              logo={<AiFillHome />}
              title="Home"
              status="desktop"
              to="/"
            />
            <NavItem
              logo={<MdLocalLibrary />}
              title="Library"
              status="desktop"
              to="/library"
            />
            <NavItem
              logo={<RiMoneyDollarCircleFill />}
              title="Pricing"
              status="desktop"
              to="/pricing"
            />
          </ul>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2.5">
                <AiOutlineSearch
                  className="text-dreamLabColor1 font-bold"
                  size={25}
                />
              </span>
              <input
                type="text"
                className="py-2.5 text-sm rounded-3xl pl-10 focus:outline-none
                bg-dreamLabColor5"
                placeholder="Search here"
              />
            </div>
            {user ? (
              <div className="flex items-center gap-2 relative">
                <img src={Profile} alt="User Profile" />
                <button
                  className="font-semibold text-sm hidden lg:block"
                  onClick={() => {
                    setUserBox(!userBox);
                  }}>
                  {user?.displayName ? user.displayName : user.email}
                </button>
                {userBox && (
                  <div className="absolute top-10 bg-white border-2 border-dreamLabColor2 shadow-lg rounded-md mt-3 w-full py-3 px-4 flex flex-col gap-y-4">
                    <Link to="/" className="flex items-center gap-x-2">
                      <HiOutlineUser />
                      My Profile
                    </Link>
                    <button
                      className="text-left flex items-center gap-x-2"
                      onClick={() => {
                        setUserBox(false);
                        logOut();
                      }}>
                      <BiLogOutCircle size={20} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-x-2 font-semibold text-lg text-dreamLabColor1">
                <button onClick={changeLoginStatus}>Login</button>
                <span>/</span>
                <button onClick={changeRegisterStatus}>Register</button>
              </div>
            )}
          </div>
        </nav>
      </div>
      {aside && (
        <>
          <div
            className="fixed top-0 h-full w-full "
            onClick={sidebarClose}></div>
          <aside className="block md:hidden bg-white fixed h-full w-2/3 p-5 z-40">
            <ul className="flex flex-col gap-y-8">
              <li className="flex justify-between items-center">
                <img src={Logo2} alt="" />
                <MdClear size={25} onClick={sidebarClose} />
              </li>
              <NavItem
                logo={<AiFillHome />}
                title="Home"
                status="mobile"
                to="/"
              />
              <NavItem
                logo={<MdLocalLibrary />}
                title="Library"
                status="mobile"
                to="/library"
              />
              <NavItem
                logo={<RiMoneyDollarCircleFill />}
                title="Pricing"
                status="mobile"
                to="/pricing"
              />
            </ul>
          </aside>
        </>
      )}
    </>
  );
};

const NavItem = ({ logo, title, status, to }) => {
  return (
    <li
      className={`font-semibold text-xl   text-textColor3 hover:text-dreamLabColor1`}>
      <Link
        to={to}
        className={`${
          status == "mobile" ? "flex" : "hidden md:flex"
        } items-center gap-2`}>
        {logo} {title}
      </Link>
    </li>
  );
};

export default NavBar;
