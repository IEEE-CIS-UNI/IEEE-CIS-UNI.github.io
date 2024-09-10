
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {          // Cuando se envia el formulario
    e.preventDefault();     // Cancela el comportamiento de cerrarse automaticamnete el fomrulario 

    const displayName = signupForm['signup-name'].value;
    const email = signupForm['signup-email'].value;       //Para visualizar el email desde la consola de la web
    const password = signupForm['signup-password'].value; //Para visualizar el password desde la consola de la web


    console.log(displayName, email, password);

    try {                          // Para manejar los errores(contraseña corta, email sin arroba, y otras coasas que no permite Firebase)
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
        const user = userCredentials.user;

        await updateProfile(user, { displayName }); // Actualizar el displayName del usuario
        console.log(user);

        // Ahora se ejecuta la función para cerrar el popup automáticamente
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.remove('active-popup');  // Cerrar el popup automáticamente

        showMessage("Bienvenido "+ userCredentials.user.displayName + " :)");


    } catch (error) {
        console.log(error);
        console.log(error.code);   // Ver por consola el codigo del error 

        if (error.code === 'auth/email-already-in-use') {
            showMessage("El email ya existe :(", "error")
        } else if (error.code === 'auth/invalid-email') {
            showMessage("Email invalido :(", "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage("La contraseña es demasiado débil:(", "error")
        } else if (error.code) {
            showMessage(error.message, "error")
        }
    }

})



