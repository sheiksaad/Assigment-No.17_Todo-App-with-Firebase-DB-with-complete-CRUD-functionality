// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAYCxNee5sDqSKXmPiAWHEWUAEfT0UIIg",
  authDomain: "auth-class-a3ab1.firebaseapp.com",
  projectId: "auth-class-a3ab1",
  storageBucket: "auth-class-a3ab1.appspot.com",
  messagingSenderId: "819491511735",
  appId: "1:819491511735:web:8138a4dc71e75af0ccdc32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

const auth = getAuth(app);

export { database, auth };
