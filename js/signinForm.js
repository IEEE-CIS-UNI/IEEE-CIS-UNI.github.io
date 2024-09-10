import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector('#login-form')

signInForm.addEventListener('submit', async e => {            // Cuando se envia el formulario
    e.preventDefault()                                 // Cancela el comportamiento de cerrarse automaticamnete el fomrulario

    const email = signInForm['login-email'].value;          //Para visualizar el email desde la consola de la web
    const password = signInForm['login-password'].value;    //Para visualizar el password desde la consola de la web

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        // Ahora se ejecuta la función para cerrar el popup automáticamente
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.remove('active-popup');  // Cerrar el popup automáticamente

        showMessage("Bienvenido "+ credentials.user.email + " :)");
    } catch (error) {
        console.log(error);
        console.log(error.code);

        if(error.code === "auth/wrong-password") {
            showMessage("Contraseña incorrecta", "error")
        }else if(error.code === "auth/user-not-found"){
            showMessage('Usuario no encontrado :(', 'error')
        }
        else if(error.code === "auth/network-request-failed"){
            showMessage('Usuario no encontrado :(', 'error')
        }
        else {
            showMessage(error.message, 'error')
        }

    }
})