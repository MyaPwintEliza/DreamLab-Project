import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsBook, BsFileEarmarkPdf } from "react-icons/bs";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { TbCheckupList, TbUserPlus } from "react-icons/tb";
import { BiCategory, BiImage, BiLogOut } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { FiUsers } from "react-icons/fi";
import {
  RiTodoLine,
  RiVipCrownLine,
  RiArrowDownSLine,
  RiMoneyDollarCircleLine,
  RiVideoLine,
  RiArticleLine,
} from "react-icons/ri";
import AdminSidebarLink from "./AdminSidebarLink";
import { useUserDataContext } from "../../contexts/UserDataContext";
// import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { adminLogout } = useUserDataContext();
  function useDropdown() {
    const [dropdown, setDropdown] = useState({
      manage: false,
      subscription: false,
    });

    function setManage() {
      setDropdown((prevDrop) => {
        return {
          ...prevDrop,
          subscription: false,
          manage: !manage,
        };
      });
    }

    function setSubscription() {
      setDropdown((prevDrop) => {
        return {
          ...prevDrop,
          manage: false,
          subscription: !subscription,
        };
      });
    }

    return {
      manage: dropdown.manage,
      subscription: dropdown.subscription,
      setSubscription,
      setManage,
    };
  }

  const { manage, subscription, setSubscription, setManage } = useDropdown();

  const customStyles = {
    "sidebar-wrapper":
      "@apply bg-dreamLabColor4 fixed top-0 left-0 z-50 h-full w-14 md:w-14 lg:w-80 text-white text-opacity-50",

    "sidebar-header-wrapper":
      "@apply hidden lg:block ml-2 py-6 mt-4 space-y-4 px-10",

    "sidebar-header": "@apply text-white font-medium tracking-wide truncate",
    "border-top": "@apply border-t my-5",
    "dropdown-title-wrapper":
      "@apply hidden lg:flex items-center justify-between ml-2 text-white",
  };

  return (
    <div className={customStyles["sidebar-wrapper"]}>
      <nav className="overflow-x-hidden overflow-y-auto">
        <div className={customStyles["sidebar-header-wrapper"]}>
          <h2 className={`${customStyles["sidebar-header"]} text-xl mt-20`}>
            Admin Dashboard
          </h2>
        </div>
        <div className="sidebar-links text-lg px-10">
          <ul>
            <li>
              <AdminSidebarLink
                to="/"
                icon={<AiOutlineHome className="w-full h-full" />}
                title="Dashboard"
              />
            </li>
            <li>
              <AdminSidebarLink
                to="/books"
                icon={<BsBook className="w-full h-full" />}
                title="Books"
              />
            </li>
            <li>
              <AdminSidebarLink
                to="/plans"
                icon={<RiTodoLine className="w-full h-full" />}
                title="Plans"
              />
            </li>
            <li>
              <AdminSidebarLink
                to="/subscriptions"
                icon={<RiVipCrownLine className="w-full h-full" />}
                title="Subscription Plan"
              />
            </li>

            <hr className={customStyles["border-top"]} />

            <li
              className={customStyles["dropdown-title-wrapper"]}
              onClick={setManage}>
              <h2 className={`${customStyles["sidebar-header"]} text-xl`}>
                Manage
              </h2>
              <RiArrowDownSLine size={25} />
            </li>
            {manage ? (
              <div className="mt-4">
                <AdminSidebarLink
                  to="/books"
                  icon={<BsBook className="w-full h-full" />}
                  title="Books"
                />
                <AdminSidebarLink
                  to="/ebooks"
                  icon={<BsFileEarmarkPdf className="w-full h-full" />}
                  title="E-books"
                />
                <AdminSidebarLink
                  to="/articles"
                  icon={<RiArticleLine className="w-full h-full" />}
                  title="Articles"
                />
                <AdminSidebarLink
                  to="/podcasts"
                  icon={<MdOutlineKeyboardVoice className="w-full h-full" />}
                  title="Podcasts"
                />
                <AdminSidebarLink
                  to="/videos"
                  icon={<RiVideoLine className="w-full h-full" />}
                  title="videos"
                />
                <AdminSidebarLink
                  to="/plans"
                  icon={<TbCheckupList className="w-full h-full" />}
                  title="Plans"
                />
                <AdminSidebarLink
                  to="/categories"
                  icon={<BiCategory className="w-full h-full" />}
                  title="Category"
                />
                <AdminSidebarLink
                  to="/authors"
                  icon={<TfiWrite className="w-full h-full" />}
                  title="Authors"
                />
                <AdminSidebarLink
                  to="/videos"
                  icon={<FiUsers className="w-full h-full" />}
                  title="Users"
                />
                <AdminSidebarLink
                  to="/videos"
                  icon={<BiImage className="w-full h-full" />}
                  title="Banner"
                />
                <AdminSidebarLink
                  to="/videos"
                  icon={<RiMoneyDollarCircleLine className="w-full h-full" />}
                  title="Payment method"
                />
              </div>
            ) : null}

            <hr className={customStyles["border-top"]} />
            <li
              className={customStyles["dropdown-title-wrapper"]}
              onClick={setSubscription}>
              <h2 className={`${customStyles["sidebar-header"]} text-xl`}>
                Subscription
              </h2>
              <RiArrowDownSLine size={25} />
            </li>
            {subscription ? (
              <div className="mt-5">
                <AdminSidebarLink
                  to="/subscribers"
                  icon={<TbUserPlus className="w-full h-full" />}
                  title="Subscriber"
                />
                <AdminSidebarLink
                  to="/subscriptions"
                  icon={<RiVipCrownLine className="w-full h-full" />}
                  title="Subscription Plan"
                />
              </div>
            ) : null}

            <hr className={customStyles["border-top"]} />
            <li className={customStyles["dropdown-title-wrapper"]}>
              <button
                onClick={adminLogout}
                className={`${customStyles["sidebar-header"]} flex items-center gap-x-2`}>
                <BiLogOut size={25} />
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
