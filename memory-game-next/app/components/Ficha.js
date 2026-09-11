function Ficha({ ficha, onClick, deshabilitada }) {
  const fichaEstaVisible = ficha.dadaVuelta || ficha.encontrada;

  return (
    <button
      className={`ficha ${fichaEstaVisible ? "ficha-visible" : ""}`}
      onClick={onClick}
      disabled={deshabilitada}
      aria-label={fichaEstaVisible ? `Carta ${ficha.valor}` : "Carta oculta"}
    >
      {fichaEstaVisible ? ficha.valor : ""}
    </button>
  );
}

export default Ficha;
