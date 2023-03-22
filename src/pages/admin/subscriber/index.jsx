import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const allLinks = [
  {
    name: "Request",
    to: "request",
  },
  {
    name: "Active",
    to: "active",
  },
  {
    name: "Expired",
    to: "expired",
  },
];

const SubscriberIndex = () => {
  const location = useLocation();
  const tempPathName = location.pathname.split("/");

  return (
    <section className="font-poppins">
      <ul className="flex gap-6 mb-8">
        <Link
          to=""
          className={`font-semibold text-[#8E98B0] text-lg ${
            tempPathName[tempPathName.length - 1] === "subscribers"
              ? "!text-dreamLabColor1  border-b-4 border-dreamLabColor1"
              : null
          }`}
        >
          All Subscribers
        </Link>
        {allLinks.map((link) => (
          <CustomLink to={link.to} key={link.name}>
            {link.name}
          </CustomLink>
        ))}
      </ul>
      <ul className="grid grid-cols-12">
        {/* heading */}
        <li className="col-span-3  text-[#8E98B0] font-semibold text-lg">
          Subscribers
        </li>
        <li className="col-span-2  text-[#8E98B0] font-semibold ">Status</li>
        <li className="col-span-3  text-[#8E98B0] font-semibold text-lg">
          Current Plan
        </li>
        <li className="col-span-2  text-[#8E98B0] font-semibold text-lg">
          Purchase Date
        </li>
        <li className="col-span-2  text-[#8E98B0] font-semibold text-lg">
          Action
        </li>
      </ul>
      <div className="w-full h-[1px] bg-[#8E98B0]  my-4"></div>
      <Outlet />
    </section>
  );
};

const CustomLink = ({ to, children }) => {
  const location = useLocation();
  const tempPathName = location.pathname.split("/");

  let isActive = tempPathName[tempPathName.length - 1] === to;

  return (
    <Link
      to={to}
      className={` font-semibold text-[#8E98B0] text-lg ${
        isActive
          ? "!text-dreamLabColor1 border-b-4 border-dreamLabColor1"
          : null
      }`}
    >
      {children}
    </Link>
  );
};

export default SubscriberIndex;