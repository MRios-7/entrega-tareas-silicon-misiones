// Variables
const texto = document.querySelector("#texto");
const contCaracteres = document.getElementById("caracteres");
const contPalabras = document.getElementById("palabras");
const sinEspacio = document.getElementById("sinEspacio");
const restantes = document.getElementById("restantes");
const btnLimpiar = document.getElementById("btnLimpiar");
const maxCaracteres = 280;

texto.addEventListener("input", contarCaracteres);
function contarCaracteres() {
  contCaracteres.textContent = texto.value.replace(/[\n\r]/g, "").length;
  contPalabras.textContent = texto.value
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  restantes.textContent = 280 - texto.value.replace(/[\n\r]/g, "").length;
  sinEspacio.textContent = texto.value.replace(/\s/g, "").length;

  if (texto.value.replace(/[\n\r]/g, "").length > maxCaracteres) {
    texto.classList.add("limiteSuperado");
    restantes.classList.add("restanteSuperado");
  } else {
    texto.classList.remove("limiteSuperado");
    restantes.classList.remove("restanteSuperado");
  }
}
function limpiar() {
  texto.value = "";
  contCaracteres.textContent = 0;
  contPalabras.textContent = 0;
  restantes.textContent = 280;
  sinEspacio.textContent = 0;
  texto.classList.remove("limiteSuperado");
  restantes.classList.remove("restanteSuperado");
}
btnLimpiar.addEventListener("click", limpiar);
