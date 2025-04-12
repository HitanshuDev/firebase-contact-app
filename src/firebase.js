// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5hrtnaqSfzZxeCsHOdHyGu-ewsLBizIE",
  authDomain: "contact-app-f4592.firebaseapp.com",
  projectId: "contact-app-f4592",
  storageBucket: "contact-app-f4592.firebasestorage.app",
  messagingSenderId: "326482692376",
  appId: "1:326482692376:web:7d3b540ed97fccc616766d",
  measurementId: "G-3KPQRQHN7Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);