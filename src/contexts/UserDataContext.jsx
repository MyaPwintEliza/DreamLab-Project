import { createContext, useContext, useEffect, useState } from "react";
import { USER_DATA_LOCAL_STORAGE } from "../hooks/useUserAuth";

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

  return (
    <UserDataContext.Provider value={{ user, refreshUserData, logOut }}>
      {children}
    </UserDataContext.Provider>
  );
};
