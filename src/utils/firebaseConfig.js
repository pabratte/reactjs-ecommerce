import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD8iPxkwWtqXiGQ7jSB6XATWvdslnU5cZ0",
  authDomain: "mimitos-ecommerce.firebaseapp.com",
  projectId: "mimitos-ecommerce",
  storageBucket: "mimitos-ecommerce.appspot.com",
  messagingSenderId: "862628270568",
  appId: "1:862628270568:web:290876bce8eb3a9009d45d",
  measurementId: "G-YSXBVLSZZ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth()
