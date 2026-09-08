const nivelesFortaleza = ["Muy débil", "Débil", "Media", "Fuerte"];

function BarraFortaleza({ puntos }) {
  const nivel =
    puntos === null
      ? null
      : puntos <= 1
        ? 0
        : puntos === 2
          ? 1
          : puntos === 3
            ? 2
            : 3;

  return (
    <div
      className={`strength-row ${nivel === null ? "" : `strength-level-${nivel}`}`}
    >
      <span className="strength-title">FORTALEZA</span>
      {nivel !== null && (
        <span className="strength-value">{nivelesFortaleza[nivel]}</span>
      )}
    </div>
  );
}

export default BarraFortaleza;
