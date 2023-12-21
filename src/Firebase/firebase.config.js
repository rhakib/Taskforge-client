// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOQLIuErbwNBDnAeI7Dsobol_Zrgo7LfM",
  authDomain: "taskforge-7ac17.firebaseapp.com",
  projectId: "taskforge-7ac17",
  storageBucket: "taskforge-7ac17.appspot.com",
  messagingSenderId: "573427499370",
  appId: "1:573427499370:web:f8e1c63bedb8f73a596513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)