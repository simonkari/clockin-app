// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCojt06NN5S0NDBJNHx76lQxdUdsav2row",
  authDomain: "clockin-app-89c26.firebaseapp.com",
  projectId: "clockin-app-89c26",
  storageBucket: "clockin-app-89c26.appspot.com", // ✅ corrected
  messagingSenderId: "713268108059",
  appId: "1:713268108059:web:55b8f127da9b68f40351be"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
