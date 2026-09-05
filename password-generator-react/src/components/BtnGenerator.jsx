import React from "react";

const BtnGenerator = ({
  conMayusculas,
  conMinuscula,
  conNumeros,
  conSimbolos,
  longitud,
  setPassword,
}) => {
  const generarPassword = () => {
    let permitidos = "";
    if (conMayusculas) permitidos += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (conMinuscula) permitidos += "abcdefghijklmnopqrstuvwxyz";
    if (conNumeros) permitidos += "0123456789";
    if (conSimbolos) permitidos += "!@#$%^&*";

    if (permitidos === "") {
      setPassword("Selecciona una opción");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < longitud; i++) {
      let random = permitidos[Math.floor(Math.random() * permitidos.length)];
      newPassword += random;
    }
    setPassword(newPassword);
  };
  return (
    <button type="button" onClick={generarPassword}>
      Generar
    </button>
  );
};

export default BtnGenerator;
