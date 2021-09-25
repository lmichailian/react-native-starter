import { User } from "@firebase/auth-types";
import React, { createContext, useEffect, useState } from "react";
import { AuthErrors } from "../lib/firebase/ErrorCodes";
import Firebase from "../lib/firebase/Firebase";

interface ContextState {
  register: (fullname: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  currentUser: User | null;
}

export const AuthContext = createContext({} as ContextState);

export function AuthProvider(props: any) {
  const [me, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    getActiveSession();
  }, []);

  async function getActiveSession() {
    const currentUser = Firebase.auth().currentUser;
    setCurrentUser(currentUser);
  }

  async function register(fullname: string, email: string, password: string) {
    try {
      const currentUser = await Firebase.auth().currentUser;

      await Firebase.auth().createUserWithEmailAndPassword(email, password);

      await currentUser?.updateProfile({
        displayName: fullname,
      });

      console.log(`[LOGGED] ${email}`);
    } catch (err: any) {
      console.log("[REGISTER ERROR]", err);
      throw err;
    }
  }

  async function login(email: string, password: string) {
    try {
      await Firebase.auth().signInWithEmailAndPassword(email, password);
      console.log(`[LOGGED] ${email}`);
    } catch (err: any) {
      console.log("[LOGIN ERROR]", err);
      if (
        AuthErrors.USER_NOT_FOUND === err.code ||
        AuthErrors.USER_WRONG_PASSWORD == err.code
      ) {
        throw { message: "Invalid Credentials" };
      }
      throw err;
    }
  }

  return (
    <AuthContext.Provider value={{ register, login, currentUser: me }}>
      {props.children}
    </AuthContext.Provider>
  );
}
