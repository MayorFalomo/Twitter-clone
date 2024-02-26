import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyDIVtpsPh4Ual_ZcK83sa9UcV_yDBRPXoU",
  apiKey: process.env.API_KEY,
  authDomain: "twitter-1fecf.firebaseapp.com",
  projectId: "twitter-1fecf",
  storageBucket: "twitter-1fecf.appspot.com",
  // messagingSenderId: "918026491792",
  messagingSenderId: process.env.MESSAGING_ID,
  // appId: "1:918026491792:web:4766d5c9f6cf59451e4515",
  appId: process.env.APP_ID,
  measurementId: "G-VYQTZ5WEFV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const storage = getStorage(app);

export const db = getFirestore(app);
