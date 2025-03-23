// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0ZYvjPi4MLbBKP8mrm7sqJUj5FnHlQqw",
  authDomain: "my-app-73051.firebaseapp.com",
  projectId: "my-app-73051",
  storageBucket: "my-app-73051.firebasestorage.app",
  messagingSenderId: "537452317152",
  appId: "1:537452317152:web:2dbaa54d1981878b400385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(); 
export const db=getFirestore(app);
export default app;