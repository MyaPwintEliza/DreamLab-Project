import React from "react";
import { Link } from "react-router-dom";

const AdminSidebarLink = ({ to, icon, title }) => {
  const customStyles = {
    icon: "@apply w-6 h-6 justify-center items-center flex",
    title: "@apply ml-4 tracking-wide truncate lg:block hidden",
  };

  return (
    <div>
      <Link to={`/admin${to}`} className="flex items-center p-2">
        <div className={customStyles.icon}>{icon}</div>
        <div className={customStyles.title}>{title}</div>
      </Link>
    </div>
  );
};

export default AdminSidebarLink;
