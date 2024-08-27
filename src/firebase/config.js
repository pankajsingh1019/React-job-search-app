import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCZEpjm6qXHKXmXuKbOXLeBAXcVhaZZv64",
    authDomain: "react-job-search-app.firebaseapp.com",
    projectId: "react-job-search-app",
    storageBucket: "react-job-search-app.appspot.com",
    messagingSenderId: "776738027513",
    appId: "1:776738027513:web:a8275859d63b3549612f28"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
