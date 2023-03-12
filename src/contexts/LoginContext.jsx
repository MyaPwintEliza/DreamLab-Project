import { createContext, useContext, useState } from "react";

const LoginContext = createContext(false);

export function useLoginContext() {
  return useContext(LoginContext);
}

export function LoginProvider({ children }) {
  const [loginStatus, setLoginStatus] = useState(false);

  function changeStatus() {
    setLoginStatus(!loginStatus);
  }

  const ContextValue = {
    loginStatus,
    changeStatus,
  };

  return (
    <LoginContext.Provider value={ContextValue}>
      {children}
    </LoginContext.Provider>
  );
}
