import React, { useState } from "react";
import PasswordSlider from "./PasswordSlider";
import BtnGenerator from "./BtnGenerator";
import Checkbox from "./Checkbox";

function InputPassword() {
  const [password, setPassword] = useState("");
  const [longitud, setlongitud] = useState(10);
  const [conMayusculas, setConMayusculas] = useState(false);
  const [conMinuscula, setConMinuscula] = useState(false);
  const [conNumeros, setConNumeros] = useState(false);
  const [conSimbolos, setConSimbolos] = useState(false);

  const copiarPassword = () => {
    if (password && password !== "Selecciona una opción") {
      navigator.clipboard.writeText(password);
      alert("¡Contraseña copiada al portapapeles!");
    }
  };

  return (
    <>
      <input readOnly type="text" placeholder="P4$5W0rD!" value={password} />
      <button type="button" onClick={copiarPassword} className="btn-copy">
        Copiar
      </button>
      <PasswordSlider longitud={longitud} setlongitud={setlongitud} />
      <Checkbox
        conMayusculas={conMayusculas}
        setConMayusculas={setConMayusculas}
        conMinuscula={conMinuscula}
        setConMinuscula={setConMinuscula}
        conNumeros={conNumeros}
        setConNumeros={setConNumeros}
        conSimbolos={conSimbolos}
        setConSimbolos={setConSimbolos}
      />
      <BtnGenerator
        password={password}
        setPassword={setPassword}
        longitud={longitud}
        setlongitud={setlongitud}
        conMayusculas={conMayusculas}
        setConMayusculas={setConMayusculas}
        conMinuscula={conMinuscula}
        setConMinuscula={setConMinuscula}
        conNumeros={conNumeros}
        setConNumeros={setConNumeros}
        conSimbolos={conSimbolos}
        setConSimbolos={setConSimbolos}
      />
    </>
  );
}

export default InputPassword;
