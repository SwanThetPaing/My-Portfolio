// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-nJZ843u7EPWeTNTx1zZW06kH0WIdkwo",
  authDomain: "my-portfolio-5c06b.firebaseapp.com",
  projectId: "my-portfolio-5c06b",
  storageBucket: "my-portfolio-5c06b.firebasestorage.app",
  messagingSenderId: "642705496186",
  appId: "1:642705496186:web:4da4483f5c5132833c03c3",
  measurementId: "G-J22HXXW2BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let db = getFirestore(app)
let storage = getStorage(app) 

export {db, storage}