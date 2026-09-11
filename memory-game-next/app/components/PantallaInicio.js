function PantallaInicio({ onIniciarPartida }) {
  return (
    <main className="pantalla-inicio">
      <section className="inicio-contenido">
        <p className="etiqueta">Desafío de Memoria</p>
        <h1>Memory Game</h1>
        <p className="inicio-descripcion">
          Encontrá todas las parejas y completá el desafío en el menor tiempo
          posible.
        </p>
        <button className="btn-principal" onClick={onIniciarPartida}>
          Iniciar Partida
        </button>
      </section>
    </main>
  );
}

export default PantallaInicio;
