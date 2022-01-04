// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);

// export const isUserLogged = () => {
//   let isLogged = false;
//   firebase.auth().onAuthStateChanged((user) => {
//     user !== null && (isLogged = true);
//   });
// };

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};
