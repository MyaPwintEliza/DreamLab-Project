import { createContext, useContext, useState } from "react";

const RegisterContext = createContext(false);

export function useRegisterContext() {
  return useContext(RegisterContext);
}

export function RegisterProvider(children) {
  const [registerStatus, setRegisterStatus] = useState(false);

  const changeStatus = (status) => setRegisterStatus(!registerStatus);

  const ContextValue = {
    registerStatus,
    changeStatus,
  };

  return (
    <RegisterContext.Provider value={ContextValue}>
      {children}
    </RegisterContext.Provider>
  );
}
