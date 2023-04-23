// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcoJ6E9XBviLX2biM44yNQYlLUlxipd3k",
  authDomain: "the-hunt-7b7d0.firebaseapp.com",
  projectId: "the-hunt-7b7d0",
  storageBucket: "the-hunt-7b7d0.appspot.com",
  messagingSenderId: "1009844001211",
  appId: "1:1009844001211:web:4f46127a8be2caf7bc8c9e",
  measurementId: "G-5YK6H21182"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);