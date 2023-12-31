// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEWsnAQ5xie_ZLfG6EhSsLA8iig0ESvNk",
  authDomain: "duofl-589d1.firebaseapp.com",
  databaseURL: "https://duofl-589d1-default-rtdb.firebaseio.com",
  projectId: "duofl-589d1",
  storageBucket: "duofl-589d1.appspot.com",
  messagingSenderId: "447632322720",
  appId: "1:447632322720:web:c273d71d8c3d8c046dd9c5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);