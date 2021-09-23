import React, { createContext } from "react";

export const AuthContext = createContext({});

export function AuthProvider(props: any) {
  function register(email: string, password: string) {
      
  }

  return (
    <AuthContext.Provider value={{ register }}>
      {props.children}
    </AuthContext.Provider>
  );
}
