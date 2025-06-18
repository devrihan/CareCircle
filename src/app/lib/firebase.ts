import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCDZNBswMFUw2Zfdf1Qvoc0Dr9xwxXRhAQ",
  authDomain: "carecircle-e12c2.firebaseapp.com",
  projectId: "carecircle-e12c2",
  storageBucket: "carecircle-e12c2.firebasestorage.app",
  messagingSenderId: "125154562945",
  appId: "1:125154562945:web:7aad91e2b1dbb5a6a38e80",
  measurementId: "G-4HCRGT3749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
