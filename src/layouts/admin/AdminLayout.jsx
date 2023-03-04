import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <header>
          <h3>Admin Dashboard</h3>
        </header>
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
