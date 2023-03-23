import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TOKEN_LOCAL_STORAGE,
  USER_DATA_LOCAL_STORAGE,
} from "../hooks/useUserAuth";
const UserDataContext = createContext(false);

export const useUserDataContext = () => {
  return useContext(UserDataContext);
};

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem(USER_DATA_LOCAL_STORAGE)));
  }, []);

  const refreshUserData = () => {
    setUser(JSON.parse(localStorage.getItem(USER_DATA_LOCAL_STORAGE)));
  };

  const logOut = () => {
    localStorage.removeItem(USER_DATA_LOCAL_STORAGE);
    localStorage.removeItem(TOKEN_LOCAL_STORAGE);
    refreshUserData();
  };

  const adminLogout = () => {
    localStorage.removeItem(TOKEN_LOCAL_STORAGE);
    refreshUserData();
    location.reload();
  };

  return (
    <UserDataContext.Provider
      value={{ user, refreshUserData, logOut, adminLogout }}>
      {children}
    </UserDataContext.Provider>
  );
};
