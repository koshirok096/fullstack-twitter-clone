// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdBvA3ARDXcZK4q5tYdFnVy-MoA8u9kxI",
  authDomain: "twitter-clone-cf48d.firebaseapp.com",
  projectId: "twitter-clone-cf48d",
  storageBucket: "twitter-clone-cf48d.appspot.com",
  messagingSenderId: "74217472150",
  appId: "1:74217472150:web:d150ce9d47a983babd82b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;