document.addEventListener("DOMContentLoaded", function () {

    // Preguntas frecuentes
    const preguntas = document.querySelectorAll(".pregunta");

    // Las respuestas se ocultan con JavaScript; sin JS quedan visibles
    document.querySelectorAll(".respuesta").forEach(function (respuesta) {
        respuesta.hidden = true;
    });

    preguntas.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const id = boton.dataset.respuesta;
            const respuesta = document.getElementById(id);

            if (!respuesta) return;

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

            const nombreInput = document.getElementById("nombre");
            const correoInput = document.getElementById("correo");
            const resultado = document.getElementById("resultado");

            const nombreValido = nombreInput.value.trim() !== "";
            const correoValido =
                correoInput.value.trim() !== "" && correoInput.validity.valid;

            nombreInput.setAttribute("aria-invalid", String(!nombreValido));
            correoInput.setAttribute("aria-invalid", String(!correoValido));

            if (!nombreValido || !correoValido) {

                resultado.textContent =
                    "Error: revisa el nombre y escribe un correo válido.";

                resultado.className = "error";

                (nombreValido ? correoInput : nombreInput).focus();

            } else {

                resultado.textContent =
                    "Datos validados correctamente. Formulario de demostración.";

                resultado.className = "exito";

            }

        });

    }

});