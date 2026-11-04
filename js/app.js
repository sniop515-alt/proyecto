function mostrar(id) {
  var r = document.getElementById(id);
  if (r.style.display == "block") {
    r.style.display = "none";
  } else {
    r.style.display = "block";
  }
}

function enviar() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var res = document.getElementById("resultado");
  if (nombre == "" || correo == "") {
    res.style.color = "red";
    res.innerHTML = "Revisa los campos";
  } else {
    res.style.color = "green";
    res.innerHTML = "Mensaje enviado";
  }
}
