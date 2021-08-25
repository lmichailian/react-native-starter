import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfo5JvG1xmOkkmLbaROjQvvE8QCKE8_v0",
  authDomain: "react-native-starter-ee65c.firebaseapp.com",
  projectId: "react-native-starter-ee65c",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
