import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyAJaB5Lzu9j3iAGaaS4QNoQMNbVt7mWu6U",
  authDomain: "m9-case-based-learning-a-99fe3.firebaseapp.com",
  projectId: "m9-case-based-learning-a-99fe3",
  storageBucket: "m9-case-based-learning-a-99fe3.appspot.com",
  messagingSenderId: "863766099676",
  appId: "1:863766099676:web:d66d82d7095b2a50b82619"
});

const FIREBASE = firebase;

export default FIREBASE;