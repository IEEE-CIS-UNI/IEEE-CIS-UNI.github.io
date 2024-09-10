/* ---------------- AUTENTIFICACIÓN DE GitHub --------------------- */

import { GithubAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js";

const githubButtom = document.querySelector('#githubLogin')

githubButtom.addEventListener('click', async() => {
    const provider = new GithubAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)  //Esto lanza la ventana para autenticación con Google
        console.log(credentials)

        // Ahora se ejecuta la función para cerrar el popup automáticamente
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.remove('active-popup');   // Cerrar el popup automáticamente 
        showMessage("Bienvenido "+ credentials.user.displayName + " :)", 'success');

    } catch (error) {
        
        console.log(error);
        console.log(error.code);   // Ver por consola el codigo del error 

        if (error.code === 'auth/account-exists-with-different-credential') {
            showMessage("Esta cuenta ya existe con credencial diferente :(", "error")
        } else if (error.code) {
            showMessage(error.message, "error")
        }
    }

})