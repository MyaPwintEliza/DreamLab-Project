import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/admin/Sidebar";

function AdminLayout() {
  return (
    <div>
      <Sidebar />
      <div>
        <header>
          <h1>Admin Dashboard</h1>
        </header>
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
