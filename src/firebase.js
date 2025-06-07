// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Npwht6tHjmevX1va5URlqGH2aD-HbeA",
  authDomain: "contact-app-83bd8.firebaseapp.com",
  projectId: "contact-app-83bd8",
  storageBucket: "contact-app-83bd8.firebasestorage.app",
  messagingSenderId: "638998241960",
  appId: "1:638998241960:web:16de8b1efb4c6c637a589d",
  measurementId: "G-LXFPSZE8LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);