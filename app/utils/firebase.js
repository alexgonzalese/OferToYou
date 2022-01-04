//import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmtC5CAmZhRrG3Br1yWtRvQ5ucW5gUAhc",
  authDomain: "ofertoyou-5aa47.firebaseapp.com",
  projectId: "ofertoyou-5aa47",
  storageBucket: "ofertoyou-5aa47.appspot.com",
  messagingSenderId: "272297276678",
  appId: "1:272297276678:web:aad3d8a8a0916689cf5a87",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
