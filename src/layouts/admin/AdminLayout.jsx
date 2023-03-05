import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../../components/admin/Header";

import Sidebar from "../../components/admin/Sidebar";

function AdminLayout() {
  return (
    <div>
      <Sidebar />
      <div className="relative overflow-x-hidden min-h-screen">
        <Header />
        <div className="h-full mb-10 ml-14 lg:ml-80">
          <div className="mx-5 mt-24 p-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
