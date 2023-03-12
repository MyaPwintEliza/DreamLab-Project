import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
// import { LoginProvider } from "./contexts/LoginContext";
// import { RegisterProvider } from "./contexts/RegisterContext";
import { TOKEN_LOCAL_STORAGE } from "./hooks/useUserAuth";
import { API_ENDPOINT } from "./services/api/api_endpoint";
import UserRoutes from "./UserRoutes";

const queryClient = new QueryClient();

function App() {
  const UserRouting = useRoutes(UserRoutes);
  const AdminRouting = useRoutes(AdminRoutes);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem(TOKEN_LOCAL_STORAGE));

  const checkAdmin = async () => {
    const requestOption = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
      method: "GET",
    };

    const response = await fetch(`${API_ENDPOINT}auths/isAdmin`, requestOption);
    return response.status;
  };

  useEffect(() => {
    checkAdmin().then((res) => {
      if (res === 200) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
  }, [token]);

  return (
    <QueryClientProvider client={queryClient}>
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
        <Route path="/*" element={UserRouting} />
      </Routes>
    </QueryClientProvider>
  );
}

//open each command line to see compotents!!
export default App;
