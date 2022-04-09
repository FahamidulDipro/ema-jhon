// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTI0lmTchSyGPrcfBriWjP9H4JoQcPpUw",
  authDomain: "ema-jhon-simple-e9ea2.firebaseapp.com",
  projectId: "ema-jhon-simple-e9ea2",
  storageBucket: "ema-jhon-simple-e9ea2.appspot.com",
  messagingSenderId: "386466685035",
  appId: "1:386466685035:web:995bfc832ba89e9265112e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
