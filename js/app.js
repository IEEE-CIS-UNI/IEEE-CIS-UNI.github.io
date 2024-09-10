import './main.js'


const menu =  document.querySelector('.lineas');  /* selecciona el primer elemento en el documento que tiene la clase lineas.*/
const navegacion = document.querySelector('.navegacion');  /* selecciona el primer elemento en el documento que tiene la clase navegacion.*/


document.addEventListener('DOMContentLoaded',()=>{  /* Este evento se dispara cuando el contenido HTML ha sido completamente cargado y procesado por el navegador.*/
    eventos();                                  /* Cuando este evento se dispara, se llama a la función eventos().*/
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu); /* La función eventos añade un event listener al elemento menu.*/
                                              /* Este event listener escucha el evento click en el menu.*/
}                                             /* Cuando el menu es clickeado, se ejecuta la función abrirMenu.*/

const abrirMenu = () => {
    navegacion.classList.remove('ocultar');   /* La función abrirMenu remueve la clase ocultar del elemento navegacion, haciendo que el elemento navegacion sea visible .*/
    botonCerrar();                            /* Se llama a la función boton cerrar.*/
}

const botonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div'); // Crea un nuevo elemento HTML <div>, que se almacena en la constante overlay.
    overlay.classList.add('pantalla-completa') ;   // Añade la clase pantalla-completa al elemento overlay, permite aplicar estilos CSS.
    if(document.querySelectorAll('.pantalla-completa').length > 0) return; // Verifica si hay al menos una clase con el nombre 'pantalla-completa', de haberlo no se ejecutan las lineas de codigo que siguen y se retornar.
    const body = document.querySelector('body');
    body.appendChild(overlay);                    // Añade el elemento overlay como hijo del elemento body.
    btnCerrar.textContent= 'x' ;           // Agrega texto al elemento(p) que cree
    btnCerrar.classList.add('btn-cerrar'); //Añade la clase btn-cerrar al elemento btnCerrar, lo que permite aplicar estilos CSS específicos a ese elemento.
    navegacion.appendChild(btnCerrar);     // Agrega el btnCerrar como un hijo del elemento navegacion, lo que hace que el botón de cierre aparezca dentro del menú de navegación.
    cerrarMenu(btnCerrar,overlay);                 // Llama a la función cerrarMenu, pasando btnCerrar como argumento.
    cerrarMenuEnlaces();                  // Añadimos un event listener a cada enlace <a> para cerrar el menú
}
  
const cerrarMenu = (boton,overlay) =>{                // Esta función recibe un elemento boton como argumento.
    boton.addEventListener('click',()=>{      // Añade un event listener al boton que escucha el evento click.
        navegacion.classList.add('ocultar');  //Cuando el boton es clickeado, la clase ocultar se añade al elemento navegacion, lo que esconde el menú de navegación nuevamente.
        overlay.remove();
        boton.remove()
    });
    overlay.onclick = function(){             // La función anónima que se asigna aquí se ejecutará cada vez que el usuario haga clic en el overlay.
        overlay.remove();                     // Elimina la opacidad(overlay) al clickear cualquier parte de la pagina.
        navegacion.classList.add('ocultar');
    }
}

const cerrarMenuEnlaces = () => {
  const enlaces = document.querySelectorAll('.navegacion a','.navegacion button');  // Selecciona todos los enlaces dentro de la navegación

  enlaces.forEach(enlace => {
      enlace.addEventListener('click', () => {
          navegacion.classList.add('ocultar');  // Oculta la navegación cuando se hace clic en cualquier enlace
          const overlay = document.querySelector('.pantalla-completa');
          if (overlay) overlay.remove();  // Elimina el overlay si existe
          const btnCerrar = document.querySelector('.btn-cerrar');
          if (btnCerrar) btnCerrar.remove();  // Elimina el botón de cerrar si existe
      });
  });
}

// ---------Creación de SLIDER(Deslizador de slide)-------

const swiper = {
  main: new Swiper('.slider-wrapper',{
    slidesPerView: 3, // Muestra 3 slides a la vez
    spaceBetween: 25, // Espacio entre los slides
    slidesPerGroup: 1, // Avanza un slide por cada clic
    loop: false,  // No repetir los slides
    grabCursor: true,


  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
       
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    //Responsive Breakpoints 

    breakpoints: {
        // Configura breakpoints para pantallas más pequeñas
        0:{
            slidesPerView: 1,
            spaceBetween: 90
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3,
        },
    }
  
  }),
blog: new Swiper('.blog-slider',{        /*  -------------- Boton de EVENTOS ------------ */
    spaceBetween: 30,
    effect: 'fade',      // Transición entre lols slides, que hacen que se desvanezca 
    loop: true,
    mousewheel: {        //Configura el comportamiento del slider con la rueda del ratón (mousewheel)
      invert: false,
    },
     autoHeight: true,  // Ajusta automáticamente la altura del contenedor del slider según el contenido de cada slide.
    pagination: {
      el: '.blog-slider__pagination', // Selecciona el elemento donde se mostrará la paginación, en este caso, el elemento con la clase .blog-slider__pagination
      clickable: true,        // Permite que los indicadores de paginación sean clicables
    }
  })
};



/* -------------- CONTACTO  ------------------- */

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_ikzfduv';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviando...';
      Swal.fire({
        title: "Enviado!",
        html: "<p style='font-size: 13px;'>Mensaje enviado satisfactoriamente. 💙🤖</p>", // Cambia el tamaño según lo que necesites
        icon: "success"
      });
    }, (err) => {
      btn.value = 'Enviando...';
      alert(JSON.stringify(err));
    });
});





