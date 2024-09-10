

/* ---------- LOGIN AND REGISTER ---------------------- */
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelectorAll('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Itera sobre cada botón y agrega un event listener
btnPopup.forEach(button => {
    button.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});


/* -------------- FIREBASE ------------ */
import { onAuthStateChanged }  from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js";
import {loginCheck}from './loginCheck.js'

import './firebase.js'
import './signupForm.js'
import './signinForm.js'
import './googleLogin.js'
import './facebookLogin.js'
import './githubLogin.js'
import './logout.js'


onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    /* if(user){
        loginCheck(user)
    } else{
        loginCheck(user)

    } */
})



