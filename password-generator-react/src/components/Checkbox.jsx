import React from "react";
import "./CSS/Checkbox.css";

const Checkbox = ({
  conMayusculas,
  setConMayusculas,
  conMinuscula,
  setConMinuscula,
  conNumeros,
  setConNumeros,
  conSimbolos,
  setConSimbolos,
}) => {
  return (
    <>
      <div className="checkbox-container">
        <label>
          <input
            onChange={(e) => setConMayusculas(e.target.checked)}
            id="mayusculas"
            type="checkbox"
          />
          Incluir Mayúsculas
        </label>
        <label>
          <input
            onChange={(e) => setConMinuscula(e.target.checked)}
            id="minusculas"
            type="checkbox"
          />
          Incluir Minúsculas
        </label>
        <label>
          <input
            onChange={(e) => setConNumeros(e.target.checked)}
            id="numeros"
            type="checkbox"
          />
          Incluir Números
        </label>
        <label>
          <input
            onChange={(e) => setConSimbolos(e.target.checked)}
            id="simbolos"
            type="checkbox"
          />
          Incluir Símbolos
        </label>
      </div>
    </>
  );
};
export default Checkbox;
