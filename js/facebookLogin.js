/* ---------------- AUTENTIFICACIÓN DE FACEBOOK --------------------- */

import { FacebookAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js";

const facebookButtom = document.querySelector('#facebookLogin')

facebookButtom.addEventListener('click', async() => {
    const provider = new FacebookAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)  //Esto lanza la ventana para autenticación con Google
        console.log(credentials)

        // Ahora se ejecuta la función para cerrar el popup automáticamente
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.remove('active-popup');   // Cerrar el popup automáticamente 
        showMessage("Bienvenido "+ credentials.user.displayName + " :)", 'success');

    } catch (error) {
        console.log(error)
    }

})