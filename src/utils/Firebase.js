// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY_URL,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_URL,
  projectId: "netflixgpt-ef03d",
  storageBucket: import.meta.env.VITE_STORAGEBUCKET_URL,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID_URL,
  appId: import.meta.env.VITE_APPID_URL,
  measurementId: import.meta.env.VITE_MEASUREMENTID_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);