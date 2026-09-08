import React, { useRef, useState } from "react";
import PasswordSlider from "./PasswordSlider";
import BtnGenerator from "./BtnGenerator";
import Checkbox from "./Checkbox";
import BarraFortaleza from "./BarraFortaleza";

function InputPassword() {
  const [password, setPassword] = useState("");
  const [longitud, setlongitud] = useState(10);
  const [conMayusculas, setConMayusculas] = useState(false);
  const [conMinuscula, setConMinuscula] = useState(false);
  const [conNumeros, setConNumeros] = useState(false);
  const [conSimbolos, setConSimbolos] = useState(false);
  const [error, setError] = useState("");
  const [puntosFortaleza, setPuntosFortaleza] = useState(null);
  const [copiado, setCopiado] = useState(false);
  const copiarTimer = useRef(null);

  const copiarPassword = () => {
    if (!password || password === "Selecciona una opción") return;

    navigator.clipboard.writeText(password).then(() => {
      setCopiado(true);
      clearTimeout(copiarTimer.current);
      copiarTimer.current = setTimeout(() => setCopiado(false), 2000);
    });
  };

  return (
    <>
      <div className="password-display">
        <input readOnly type="text" placeholder="P4$5W0rD!" value={password} />
        {copiado && <span className="copied-message">¡Copiado!</span>}
      </div>
      <button type="button" onClick={copiarPassword} className="btn-copy">
        Copiar
      </button>

      <h5 id="error" value={error}>
        {error}
      </h5>
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
      <BarraFortaleza puntos={puntosFortaleza} />
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
        setError={setError}
        setPuntosFortaleza={setPuntosFortaleza}
      />
    </>
  );
}

export default InputPassword;
