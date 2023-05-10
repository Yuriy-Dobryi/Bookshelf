// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALEkLtygY4ClPeNnBWsjWWRHuqNt2hGg0",
  authDomain: "book-shelf-01.firebaseapp.com",
  databaseURL: "https://book-shelf-01-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "book-shelf-01",
  storageBucket: "book-shelf-01.appspot.com",
  messagingSenderId: "643395349069",
  appId: "1:643395349069:web:a33ae1c6eee3be9ea34a04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

