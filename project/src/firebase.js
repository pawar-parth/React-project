// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// ←–– Paste the config you copied from the console here:
const firebaseConfig = {

  apiKey: "AIzaSyD0jc7jPHnBMa0O_kzVWWVBJacEcaMS1G4",

  authDomain: "student-app-6f2a8.firebaseapp.com",

  projectId: "student-app-6f2a8",

  storageBucket: "student-app-6f2a8.firebasestorage.app",

  messagingSenderId: "360219900172",

  appId: "1:360219900172:web:ab1fae27a046258373f129",

  measurementId: "G-5W9NMYBWQS"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Auth instance and the helper to create users
export const auth = getAuth(app);
export { createUserWithEmailAndPassword };
