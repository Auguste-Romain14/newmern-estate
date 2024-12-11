// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREABSE_API_KEY,
  authDomain: "mern-estate-d8285.firebaseapp.com",
  projectId: "mern-estate-d8285",
  storageBucket: "mern-estate-d8285.firebasestorage.app",
  messagingSenderId: "645577993047",
  appId: "1:645577993047:web:3ccd22fcd0efa696fe6c12",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
