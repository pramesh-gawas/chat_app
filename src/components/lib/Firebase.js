import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-7d9fc.firebaseapp.com",
  projectId: "reactchat-7d9fc",
  storageBucket: "reactchat-7d9fc.firebasestorage.app",
  messagingSenderId: "622968631208",
  appId: "1:622968631208:web:8a9ac00fdcca9c2b19379d",
  measurementId: "G-KR3Y9BYS7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
