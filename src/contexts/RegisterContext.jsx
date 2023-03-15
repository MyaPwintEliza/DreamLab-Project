import React, { createContext } from "react";
import { useContext, useState } from "react";

const RegisterContext = createContext(false);

export const useRegisterContext = () => {
  return useContext(RegisterContext);
};

export const RegisterProvider = ({ children }) => {
  const [status, setStatus] = useState(false);

  const changeStatus = () => {
    setStatus(!status);
  };

  return (
    <RegisterContext.Provider value={{ status, changeStatus }}>
      {children}
    </RegisterContext.Provider>
  );
};
