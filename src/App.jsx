import { useState } from "react";
import { useRoutes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";

function App() {
  const AdminRouting = useRoutes(AdminRoutes);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="text-3xl font-bold underline text-textColor1">
      Dream Lab
    </div>
  );
}

export default App;
