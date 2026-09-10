import PieDePagina from "./PieDePagina";

function PantallaVictoria({ tiempo, movimientos, onJugarDeNuevo }) {
  return (
    <main>
      <section className="pantalla-victoria">
        <p className="etiqueta">Partida completada</p>
        <h1>¡Lo lograste!</h1>
        <PieDePagina tiempo={tiempo} movimientos={movimientos} />
        <button className="btn-principal" onClick={onJugarDeNuevo}>
          Jugar de nuevo
        </button>
      </section>
    </main>
  );
}

export default PantallaVictoria;
