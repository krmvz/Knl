import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDD1HxhJea194mjJu2vLER048U2Q_FuGoo",
  authDomain: "knowledge-731c6.firebaseapp.com",
  projectId: "knowledge-731c6",
  storageBucket: "knowledge-731c6.appspot.com",
  messagingSenderId: "56729792018",
  appId: "1:56729792018:web:2f574202b2d94d331b32cb"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);