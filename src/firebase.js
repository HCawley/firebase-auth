// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZcDhkB6gzbpMkpU6grnctqIwBESnsJfA",
  authDomain: "fir-testhelen.firebaseapp.com",
  projectId: "fir-testhelen",
  storageBucket: "fir-testhelen.appspot.com",
  messagingSenderId: "290351701891",
  appId: "1:290351701891:web:b375b3a6edf6e1a664e0b6"
};

// export const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);