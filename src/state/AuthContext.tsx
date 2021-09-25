import { User } from "@firebase/auth-types";
import React, { createContext, useEffect, useState } from "react";
import { AuthErrors } from "../lib/firebase/ErrorCodes";
import Firebase from "../lib/firebase/Firebase";

interface ContextState {
  register: (fullname: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  currentUser: User | null;
  appLoading: boolean;
}

export const AuthContext = createContext({} as ContextState);

export function AuthProvider(props: any) {
  const [me, setCurrentUser] = useState<User | null>(null);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = getInitialSessionStatus(setAppLoading, appLoading);

    return () => {
      return unsubscribe();
    };
  }, []);

  const getInitialSessionStatus = function (
    callback: Function,
    appLoading: boolean
  ) {
    return Firebase.auth().onAuthStateChanged(
      (user) => {
        if (appLoading) {
          setCurrentUser(user);
          callback(false);
        }
      },
      (err) => {
        console.log("[INIT ERROR]", err);
        setAppLoading(false);
      }
    );
  };

  async function register(fullname: string, email: string, password: string) {
    try {
      await Firebase.auth().createUserWithEmailAndPassword(email, password);

      const currentUser = await Firebase.auth().currentUser;

      await currentUser?.updateProfile({
        displayName: fullname,
      });

      console.log("AUTH SCREEN");

      setCurrentUser(currentUser);

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

  async function logout() {
    try {
      await Firebase.auth().signOut();
      setCurrentUser(null);
    } catch (err: any) {
      console.log("[LOGOUT ERROR]", err);
      throw err;
    }
  }

  return (
    <AuthContext.Provider
      value={{ register, login, logout, appLoading, currentUser: me }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
