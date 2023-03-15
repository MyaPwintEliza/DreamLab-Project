import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";

import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserDataProvider } from "./contexts/UserDataContext";
import { TOKEN_LOCAL_STORAGE } from "./hooks/useUserAuth";

import { LoginProvider } from "./contexts/LoginContext";
import { RegisterProvider } from "./contexts/RegisterContext";
import { API_ENDPOINT } from "./services/api/api_endpoint";

const queryClient = new QueryClient();

function App() {
  const UserRouting = useRoutes(UserRoutes);
  const AdminRouting = useRoutes(AdminRoutes);
  const token = localStorage.getItem(TOKEN_LOCAL_STORAGE);
  const [isAdmin, setIsAdmin] = useState(false);

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
    checkAdmin().then((rep) => {
      if (rep === 200) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
  }, [token]);

  return (
    <RegisterProvider>
      <LoginProvider>
        <UserDataProvider>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route
                path="/login"
                element={
                  isAdmin ? <Navigate to="/admin" replace /> : AdminRouting
                }
              />
              <Route
                path="/admin/*"
                element={isAdmin ? AdminRouting : <Navigate to="/login" />}
              />
              <Route path="/*" element={UserRouting} />
            </Routes>
          </QueryClientProvider>
        </UserDataProvider>
      </LoginProvider>
    </RegisterProvider>
  );
}

export default App;
