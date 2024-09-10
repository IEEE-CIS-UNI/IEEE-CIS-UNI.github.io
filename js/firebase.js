/* -------------- FIREBASE ------------ */

// Import the functions you need from the SDKs you need
import { initializeApp } from  "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth }  from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBioduKTzpjEDqxQ7ysqRqZpyZmGZsBs5Q",
  authDomain: "ieee-cis-uni-6b2a2.firebaseapp.com",
  projectId: "ieee-cis-uni-6b2a2",
  storageBucket: "ieee-cis-uni-6b2a2.appspot.com",
  messagingSenderId: "70687061438",
  appId: "1:70687061438:web:f4238d358740a77db635ef"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);