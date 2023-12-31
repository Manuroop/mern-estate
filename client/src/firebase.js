// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bef88.firebaseapp.com",
  projectId: "mern-estate-bef88",
  storageBucket: "mern-estate-bef88.appspot.com",
  messagingSenderId: "459353624576",
  appId: "1:459353624576:web:af884b90b9e461320908e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);