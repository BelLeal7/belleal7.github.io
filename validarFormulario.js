const expNombre = /^[a-zA-Z]*$/;
const expTexto = /^.{0,40}$/;
const expTelefono = /^[1-9][0-9]{9}$/;

function limpiarErrores(event) {
  const actualInput = event.target;
  const actualHermano = actualInput.nextElementSibling;

  if (actualHermano.calssList && actualHermano.calssList.contains("alarmas")) {
    actualHermano.remove();
    actualInput.classList.remove("inputErroneo");
  }
}

function validar(event) {
  event.preventDefault();
  let flagError = false;

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const tipoConsulta = document.getElementById("tipoConsulta");
  const consulta = document.getElementById("consulta");
  const tamano = document.getElementById("tamano");
  const texto = document.getElementById("texto");

  console.log(nombre, email, tipoConsulta, consulta, tamano, texto);

  if (nombre.value == " " || !expNombre.test(nombre.value)) {
    const spanError = document.createElement("span");
    spanError.textContent = "Ingrese un nombre valido";
    spanError.className = "alarmas"; //css//

    if (nombre.nextSibling.nodeName != "SPAN") {
      nombre.insertAdjacentElement("afterend", spanError);
      nombre.classList.add("inputErroneo");
    }
    flagError = true;
  }

  if (email.value == " ") {
    console.log("Error");
    const spanError = document.createElement("span");
    spanError.textContent = "Ingrese un email valido";
    spanError.className = "alarmas"; //css//

    if (email.nextElementSibling?.nodeName != "SPAN") {
      email.insertAdjacentElement("afterend", spanError);
      email.calssList.add("inputErroneo");
    }
    flagError = true;
  }

  if (telefono.value == "" || !expTelefono.test(telefono.value)) {
    console.log("Error");
    const spanError = document.createElement("span");
    spanError.textContent = "Ingrese un numero de telefono ,sin 0 y 15";
    spanError.className = "alarmas"; //css//

    if (telefono.nextSibling.nodeName != "SPAN") {
      telefono.insertAdjacentElement("afterend", spanError);
      telefono.calssList.add("inputErroneo");
    }
    flagError = true;
  }

  if (texto.value == "" && !expTexto.test(texto.value)) {
    console.log("Error");
    const spanError = document.createElement("span");
    spanError.textContent = "Limite de 40 caracteres";
    spanError.className = "alarmas"; //css//

    if (texto.nextSibling.nodeName != "SPAN") {
      texto.insertAdjacentElement("afterend", spanError);
      texto.calssList.add("inputErroneo");
    }
    flagError = true;
  }

  if (!flagError) {
    agregarAlListado(
      nombre.value,
      email.value,
      telefono.value,
      tipoConsulta.value,
      consulta.value,
      tamano.value,
      texto.value
    );
    limpiarFormulario();
  }

  return !flagError;
}

function agregarAlListado(
  nombre,
  email,
  telefono,
  tipoConsulta,
  consulta,
  tamano,
  texto
) {
  const lista = document.getElementById("list");
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = `Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}, Tipo de Consulta: ${tipoConsulta}, Espacio: ${consulta}, Tamaño: ${tamano}, Comentario: ${texto}`;
  lista.appendChild(nuevoElemento);
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("tipoConsulta").value = "Precio";
  document.getElementById("consulta").value = "Comedor";
  document.getElementById("tamano").value = "chica";
  document.getElementById("texto").value = "";
}

// Event listeners para limpiar errores
document.getElementById("nombre").addEventListener("input", limpiarErrores);
document.getElementById("email").addEventListener("input", limpiarErrores);
document.getElementById("telefono").addEventListener("input", limpiarErrores);
