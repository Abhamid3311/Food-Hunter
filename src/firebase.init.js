// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYBVMmy9aYO1xmdPj8suIW7qVI4tfBRDQ",
    authDomain: "food-hunter-e9564.firebaseapp.com",
    projectId: "food-hunter-e9564",
    storageBucket: "food-hunter-e9564.firebasestorage.app",
    messagingSenderId: "289917017987",
    appId: "1:289917017987:web:2c5f7c388e04a7be98a0b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;