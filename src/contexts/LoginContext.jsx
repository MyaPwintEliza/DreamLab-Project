import { createContext, useContext, useState } from "react";

const LoginContext = createContext(false);

export function LoginProvider({ children }) {
  const [status, setStatus] = useState(false);

  function changeStatus() {
    setStatus(!status);
  }

  const ContextValue = {
    status,
    changeStatus,
  };

  return (
    <LoginContext.Provider value={ContextValue}>
      {children}
    </LoginContext.Provider>
  );
}

function useLoginContext() {
  return useContext(LoginContext);
}
