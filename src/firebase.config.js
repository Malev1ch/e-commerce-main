// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTH1HgUoNKs1axJ7N_yljGZ1baD-LJ-O4",
  authDomain: "websi-f8f54.firebaseapp.com",
  projectId: "websi-f8f54",
  storageBucket: "websi-f8f54.appspot.com",
  messagingSenderId: "635291713217",
  appId: "1:635291713217:web:4e49b872a1f70b6907de40",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
