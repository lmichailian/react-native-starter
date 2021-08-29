import firebase from "firebase/app";
import "firebase/auth";

import Constants from "expo-constants";

const { apiKey, authDomain, projectId }: any = Constants?.manifest?.extra;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
