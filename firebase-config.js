import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "twitter-1fecf.firebaseapp.com",
  projectId: "twitter-1fecf",
  storageBucket:  "twitter-1fecf.appspot.com",
  messagingSenderId: process.env.MESSAGING_ID ,
  appId: process.env.APP_ID,
  measurementId: "G-VYQTZ5WEFV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const storage = getStorage(app);

export const db = getFirestore(app);