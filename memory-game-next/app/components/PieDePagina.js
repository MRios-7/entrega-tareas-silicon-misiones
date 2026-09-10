function formatearTiempo(segundosTotales) {
  const minutos = Math.floor(segundosTotales / 60);
  const segundos = segundosTotales % 60;

  return `${minutos}:${String(segundos).padStart(2, "0")}`;
}

function PieDePagina({ tiempo, movimientos }) {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-card">
          <h5>Tiempo: {formatearTiempo(tiempo)}</h5>
        </div>
        <div className="footer-card">
          <h5>Movimientos: {movimientos}</h5>
        </div>
      </div>
    </footer>
  );
}

export default PieDePagina;
