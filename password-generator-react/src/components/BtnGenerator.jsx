import React from "react";

const BtnGenerator = ({
  conMayusculas,
  conMinuscula,
  conNumeros,
  conSimbolos,
  longitud,
  setPassword,
  setError,
}) => {
  const generarPassword = () => {
    let permitidos = "";
    if (conMayusculas) permitidos += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (conMinuscula) permitidos += "abcdefghijklmnopqrstuvwxyz";
    if (conNumeros) permitidos += "0123456789";
    if (conSimbolos) permitidos += "!@#$%^&*";

    if (longitud === 0) {
      setError("Se necesita que la longitud sea mayor a 0");
    }

    let newPassword = "";
    if (permitidos === "") {
      setPassword("");
      setError("Marque al menos una Casilla");
    } else {
      for (let i = 0; i < longitud; i++) {
        let random = permitidos[Math.floor(Math.random() * permitidos.length)];
        newPassword += random;
      }
      setPassword(newPassword);
    }
    if (permitidos === "" && longitud === 0) {
      setError(
        "Es necesario que la longitud sea mayor a 0 y tambien marque al menos una casilla",
      );
    }
  };
  return (
    <button type="button" onClick={generarPassword}>
      Generar
    </button>
  );
};

export default BtnGenerator;
