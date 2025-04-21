// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "BIzaSZbzFdIDSic",
  authDomain: "cinemagpt6573.firebaseapp.com",
  projectId: "cinemagpt-676",
  storageBucket: "cinemagpt-7764.firebasestorage.app",
  messagingSenderId: "783883",
  appId: "1:616239922:web:e38fe673992",
  measurementId: "K-783bhfeeeeL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();