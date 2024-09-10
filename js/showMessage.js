/* Notifiaciones de alertas de errores en la digitación del registro  */

export function showMessage(message,type = "success"){
    Toastify({
        text: message,
        duration: 4000,
        destination: "#",
        newWindow: false,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: type === "success" ? "green" : "red",
          fontFamily: 'Montserrat'
        },
        onClick: function(){} // Callback after click
      }).showToast();
}