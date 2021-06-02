import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBiWHpEvPufFoUuVE2PcjJOQOEp3B9_gQc",
  authDomain: "crwn-db-679f3.firebaseapp.com",
  projectId: "crwn-db-679f3",
  storageBucket: "crwn-db-679f3.appspot.com",
  messagingSenderId: "624475205739",
  appId: "1:624475205739:web:b8d1b25d0b2c9686be012e",
  measurementId: "G-Q78JTHGNX2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
