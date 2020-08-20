import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC8jgzvZKl-R-XQOJevFJ-jN-7bK4DsSRU",
    authDomain: "ad-postings.firebaseapp.com",
    databaseURL: "https://ad-postings.firebaseio.com",
    projectId: "ad-postings",
    storageBucket: "ad-postings.appspot.com",
    messagingSenderId: "963326566872",
    appId: "1:963326566872:web:6cb6841fe9100b870312ad",
    measurementId: "G-YNPY3W4Y8L"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider=  new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
