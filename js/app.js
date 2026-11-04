
document.addEventListener("DOMContentLoaded", function () {

    // Preguntas frecuentes
    const preguntas = document.querySelectorAll(".pregunta");

    preguntas.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const id = boton.dataset.respuesta;
            const respuesta = document.getElementById(id);

            const estaAbierta =
                boton.getAttribute("aria-expanded") === "true";

            boton.setAttribute(
                "aria-expanded",
                String(!estaAbierta)
            );

            respuesta.hidden = estaAbierta;

        });

    });


    // Formulario de contacto
    const formulario = document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", function (evento) {

            evento.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const resultado = document.getElementById("resultado");

            if (nombre === "" || correo === "") {

                resultado.textContent = "Revisa los campos obligatorios.";
                resultado.className = "error";

            } else {

                resultado.textContent = "Mensaje enviado correctamente.";
                resultado.className = "exito";

            }

        });

    }

});
