function Ficha({ ficha, onClick, deshabilitada }) {
  const fichaEstaVisible = ficha.dadaVuelta || ficha.encontrada;

  return (
    <button className="ficha" onClick={onClick} disabled={deshabilitada}>
      {fichaEstaVisible ? ficha.valor : ""}
    </button>
  );
}

export default Ficha;
