/** @format */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCIVNhJKvWECa_PwUXWFY2GH-S6t5QuP78",
  authDomain: "deardelicacy-2e7c8.firebaseapp.com",
  projectId: "deardelicacy-2e7c8",
  storageBucket: "deardelicacy-2e7c8.appspot.com",
  messagingSenderId: "67604472571",
  appId: "1:67604472571:web:1601d573db343a8b81865e",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
