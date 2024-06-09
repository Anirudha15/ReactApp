// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "AIzaSyDvsAvCVIL0dN9D3N6zk--WZlZQkhgbCEQ",
  authDomain: "reactchat-43bd7.firebaseapp.com",
  projectId: "reactchat-43bd7",
  storageBucket: "reactchat-43bd7.appspot.com",
  messagingSenderId: "1037851772736",
  appId: "1:1037851772736:web:4bf7a65375be40b9d89ca5"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// for login page authentaction
export const auth = getAuth()
// for user information
export const db = getFirestore()
// for storage
export const storage = getStorage()