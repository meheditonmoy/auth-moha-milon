// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvJsFcotskjIsNbw56_Ttf79fd9dhS5PM",
  authDomain: "auth-moha-milon-5904a.firebaseapp.com",
  projectId: "auth-moha-milon-5904a",
  storageBucket: "auth-moha-milon-5904a.appspot.com",
  messagingSenderId: "844277237985",
  appId: "1:844277237985:web:90467e488c83e23559cfa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;