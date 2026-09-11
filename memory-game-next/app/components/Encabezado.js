function Encabezado({ onNuevaPartida }) {
  return (
    <header className="encabezado-juego">
      <h1>Memory Game</h1>
      <button className="btn-iniciar" onClick={onNuevaPartida}>
        Nueva Partida
      </button>
    </header>
  );
}

export default Encabezado;
