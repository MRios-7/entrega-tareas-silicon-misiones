function BtnCopy({ password }) {
  const copiarPassword = () => {
    if (password && password !== "Selecciona una opción") {
      navigator.clipboard.writeText(password);
      alert("¡Contraseña copiada al portapapeles!");
    }
    return (
      <>
        <button type="button" onClick={copiarPassword} className="btn-copy">
          Copiar
        </button>
      </>
    );
  };
}

export default BtnCopy;
