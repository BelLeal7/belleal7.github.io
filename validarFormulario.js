const expNombre = /^[a-zA-Z]*$/;
const expTexto = /^.{0,40}$/;
const expTelefono = /^[1-9][0-9]{9}$/;

function limpiarErrores(event) {
  const actualInput = event.target;
  const actualHermano = actualInput.nextElementSibling;

  if (actualHermano && actualHermano.classsList.contains("alarmas")) {
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

  limpiarErroresPrevios();

  if (nombre.value === " " || !expNombre.test(nombre.value)) {
    agregarError(nombre, "Ingrese un nombre valido");
    flagError = true;
  }

  if (email.value === " ") {
    agregarError(email, "Ingrese un email valido");
    flagError = true;
  }

  if (telefono.value === "" || !expTelefono.test(telefono.value)) {
    agregarError(telefono, "Ingrese un numero de telefono, sin 0 y 15");
    flagError = true;
  }

  if (texto.value === "" && !expTexto.test(texto.value)) {
    agregarError(texto, "Limite de 40 caracteres");
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
function limpiarErroresPrevios() {
  const alertas = document.querySelectorAll(".alarmas");
  alertas.forEach((alerta) => alerta.remove());

  const inputsErroneos = document.querySelectorAll(".inputErroneo");
  inputsErroneos.forEach((input) => input.classList.remove("inputErroneo"));
}
function agregarError(elemento, mensaje) {
  let spanError = elemento.nextElementSibling;
  if (!spanError || spanError.nodeName !== "SPAN") {
    spanError = document.createElement("span");
    spanError.textContent = mensaje;
    spanError.className = "alarmas"; 
    elemento.insertAdjacentElement("afterend", spanError);
  }
  elemento.classList.add("inputErroneo");
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

document.getElementById("nombre").addEventListener("input", limpiarErrores);
document.getElementById("email").addEventListener("input", limpiarErrores);
document.getElementById("telefono").addEventListener("input", limpiarErrores);
document.getElementById("formulario").addEventListener("submit", validar);
