import { useState } from "react";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import { LoginProvider } from "./contexts/LoginContext";
import { RegisterProvider } from "./contexts/RegisterContext";

function App() {
  const AdminRouting = useRoutes(AdminRoutes);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <Routes>
      <Route
        path="/login"
        element={isAdmin ? <Navigate to="/admin" replace /> : AdminRouting}
      />
      <Route
        path="/admin/*"
        element={isAdmin ? AdminRouting : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
