import { useState } from "react";
<<<<<<< Updated upstream
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
=======
import Navbar from "./components/user/Navbar";
import Footer from "./components/user/Footer";
import UserLogin from "./components/user/UserLogin";
import UserRegister from "./components/user/UserRegister";
>>>>>>> Stashed changes

function App() {
  const AdminRouting = useRoutes(AdminRoutes);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
<<<<<<< Updated upstream
    <Routes>
      <Route
        path="/login"
        element={isAdmin ? <Navigate to="/admin" replace /> : AdminRouting}
      />
      <Route
        path="/admin/*"
        element={isAdmin ? AdminRouting : <Navigate to="/login" />}
      />
      <Route path="/register" element={AdminRouting} />
    </Routes>
=======
    <div className="text-3xl font-bold underline">
      <Navbar />

      <UserLogin />

      <UserRegister />

      <Footer />
    </div>
>>>>>>> Stashed changes
  );
}

//open each command line to see compotents!!
export default App;
