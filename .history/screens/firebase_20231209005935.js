// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOXkBglf7YNKILqyMZjXPEpV5VeJ2nmZ4",
  authDomain: "knowledge-6eba2.firebaseapp.com",
  projectId: "knowledge-6eba2",
  storageBucket: "knowledge-6eba2.appspot.com",
  messagingSenderId: "495027441192",
  appId: "1:495027441192:web:98c7b7f089fe782dbcaf1d"
};

// Initialize Firebase
let app;
if(firebase.app.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase