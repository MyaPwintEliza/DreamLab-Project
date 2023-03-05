import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../../components/admin/Header";

import Sidebar from "../../components/admin/Sidebar";

function AdminLayout() {
  return (
    <div>
      <Sidebar />
      <div>
        <Header>
          <h1>Admin Dashboard</h1>
        </Header>
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
