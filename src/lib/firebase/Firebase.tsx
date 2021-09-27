import firebase from "firebase/app";
import "firebase/auth";
import { apiKey, authDomain, projectId } from "../../config/init";

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
