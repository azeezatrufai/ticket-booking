// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcnxo72qSbL2Me-D3s_qG825GjVP15pM8",
  authDomain: "ticket-booking-app-fd434.firebaseapp.com",
  projectId: "ticket-booking-app-fd434",
  storageBucket: "ticket-booking-app-fd434.firebasestorage.app",
  messagingSenderId: "367639337176",
  appId: "1:367639337176:web:edb49be55bf5540ccbdfad",
  measurementId: "G-9YC4L14PPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);