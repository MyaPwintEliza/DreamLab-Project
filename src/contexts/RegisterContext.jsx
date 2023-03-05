import { createContext, useContext, useState } from "react";

const RegisterContext = createContext(false);

export function RegisterProvider(children) {
  const [status, setStatus] = useState(false);

  const changeStatus = (status) => setStatus(!status);

  const ContextValue = {
    status,
    changeStatus,
  };

  return (
    <RegisterContext.Provider value={ContextValue}>
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegisterContext() {
  return useContext(RegisterContext);
}
