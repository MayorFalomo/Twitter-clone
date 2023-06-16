import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_API_KEY ,
  authDomain: "twitter-1fecf.firebaseapp.com",
  projectId: "twitter-1fecf",
  storageBucket: "twitter-1fecf.appspot.com",
  messagingSenderId: "918026491792",
  appId: "1:918026491792:web:4766d5c9f6cf59451e4515",
  measurementId: "G-VYQTZ5WEFV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const storage = getStorage(app);

export const db = getFirestore(app);