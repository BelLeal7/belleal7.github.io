const expNombre = /^[a-zA-Z]*$/;
const expTexto = /^.{0,40}$/;
const expTelefono = /^[1-9][0-9]{9}$/;

function limpiarErrores(event) {
  const actualInput = event.target;
  const actualHermano = actualInput.nextSibling;

  if (actualHermano.calssList &&
    actualHermano.calssList.contains("alarmas")) {
    actualHermano.remove();
  }
}

function validar(event) {
  let flagError = false;

  //    event.preventDefault();
  const nombre = document.getElementsById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const tipoConsulta = document.getElementById("tipoConsulta");
  const consulta = document.getElementById("consulta");
  const tamano = document.getElementById("tamano");
  const texto = document.getElementById("texto");

  console.log(nombre, email, tipoConsulta, consulta, tamano, texto);

  if (nombre.value == " " || !expNombre.test(nombre)) {
    const spanError = document.createElement("span");
    spanError.textContent = "Ingrese un nombre valido";
    spanError.className = "alarmas"; //css//

    if (nombre.nextSibling.nodeName != "SPAN") {
      nombre.insertAdjacentElement("afterend", spanError);
      nombre.calssList.add("inputErroneo");
    }
    flagError = true;
  }

  if (email.value == " ") {
    console.log("Error");
    const spanError = document.createElement("span");
    spanError.textContent = "Ingrese un email valido";
    spanError.className = "alarmas"; //css//

    if (nombre.nextSibling.nodeName != "SPAN") {
      nombre.insertAdjacentElement("afterend", spanError);
      nombre.calssList.add("inputErroneo");
    }
    flagError = true;
  }

  if (telefono.value == "" && !expTelefono.test(telefono)) {
    console.log("Error");
    const spanError = document.createElement("span");
    spanError.textContent = "Ingrese un numero de telefono valido";
    spanError.className = "alarmas"; //css//

    if (nombre.nextSibling.nodeName != "SPAN") {
      nombre.insertAdjacentElement("afterend", spanError);
      nombre.calssList.add("inputErroneo");
    }
    flagError = true;
  }

  if(!flagError){
    let text;
    
  }

  return false;
}
