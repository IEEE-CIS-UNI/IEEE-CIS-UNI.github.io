import{signOut} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"  // Cierra nuestra secciòn desde nuestreo Fronted 
import { auth } from "./firebase.js"

const logout = document.querySelector('#logout')

logout.addEventListener('click', async() => {
   await signOut(auth)
   console.log('user sign out')
})