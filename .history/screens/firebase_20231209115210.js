// import * as firebase from 'firebase';
import { initialize}


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

const auth = firebase.auth();

export { auth };