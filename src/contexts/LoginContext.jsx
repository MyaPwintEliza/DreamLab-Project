import React, { createContext } from "react";
import { useContext, useState } from "react";

const LoginContext = createContext(false);

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
  const [status, setStatus] = useState(false);

  const changeStatus = () => {
    setStatus(!status);
  };

  return (
    <LoginContext.Provider value={{ status, changeStatus }}>
      {children}
    </LoginContext.Provider>
  );
};
