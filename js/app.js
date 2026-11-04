

document.addEventListener("DOMContentLoaded", function () {

    // Preguntas frecuentes
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

            const nombre = document.getElementById("nombre").value.trim();
            const correoInput = document.getElementById("correo");
            const correo = correoInput.value.trim();
            const resultado = document.getElementById("resultado");

            if (
                nombre === "" ||
                correo === "" ||
                !correoInput.validity.valid
            ) {

                resultado.textContent =
                    "Revisa el nombre y escribe un correo válido.";

                resultado.className = "error";

            } else {

                resultado.textContent =
                    "Datos validados correctamente. Formulario de demostración.";

                resultado.className = "exito";

            }

        });

    }

});
