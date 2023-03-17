import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUI6J67BNe3NfXdjxUsNM7YCtfO_23OYc",
    authDomain: "linkedin-clone-888a5.firebaseapp.com",
    projectId: "linkedin-clone-888a5",
    storageBucket: "linkedin-clone-888a5.appspot.com",
    messagingSenderId: "1768056401",
    appId: "1:1768056401:web:330de3a120118485defa70"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };