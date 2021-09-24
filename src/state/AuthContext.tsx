import React, { createContext } from "react";
import Firebase from "../lib/firebase/Firebase";
import { User } from "@firebase/auth-types";
interface ContextState {
  register: (fullname: string, email: string, password: string) => void;
}

export const AuthContext = createContext({} as ContextState);

export function AuthProvider(props: any) {
  async function register(fullname: string, email: string, password: string) {
    try {
      const currentUser = await Firebase.auth().currentUser;
      
      await Firebase.auth().createUserWithEmailAndPassword(email, password);

      await currentUser?.updateProfile({
        displayName: fullname,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <AuthContext.Provider value={{ register }}>
      {props.children}
    </AuthContext.Provider>
  );
}
