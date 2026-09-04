// Variables
const texto = document.querySelector("#texto");
const alerta = document.getElementById("alerta");
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
    alerta.textContent = "Has superado el límite de caracteres.";
  } else {
    texto.classList.remove("limiteSuperado");
    restantes.classList.remove("restanteSuperado");
    alerta.textContent = "";
  }
}
function limpiar() {
  texto.value = "";
  contarCaracteres();
}
btnLimpiar.addEventListener("click", limpiar);
