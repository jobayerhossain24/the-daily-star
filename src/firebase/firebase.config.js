// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

/* 
const firebaseConfig = {
  apiKey: "AIzaSyDurgnRMS91J2sTOA4caKvierlXGieDEE0",
  authDomain: "daily-star-news-8ffb9.firebaseapp.com",
  projectId: "daily-star-news-8ffb9",
  storageBucket: "daily-star-news-8ffb9.appspot.com",
  messagingSenderId: "356435014384",
  appId: "1:356435014384:web:24308de6e1f6ea0f8ac835",
};
*/
