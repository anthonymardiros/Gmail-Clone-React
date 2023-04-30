// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS-Jt-ctgwN74YiBoL9j7mb9whxQHuolw",
  authDomain: "clone-ff549.firebaseapp.com",
  projectId: "clone-ff549",
  storageBucket: "clone-ff549.appspot.com",
  messagingSenderId: "54475323245",
  appId: "1:54475323245:web:20e33f2680fe07ecbd0c64",
  measurementId: "G-49FN9CDJLQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

export { auth, db, provider };
