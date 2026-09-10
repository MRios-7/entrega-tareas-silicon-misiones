"use client";
import { useState } from "react";
function crearTablero() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
  const duplicados = [...numeros, ...numeros];
  const mezclados = duplicados.sort(() => Math.random() - 0.5);

  return mezclados.map((valor, indice) => ({
    id: indice,
    valor: valor,
    dadaVuelta: false,
    encontrada: false,
  }));
}
function fichasIguales() {}

export default function Home() {
  const [tablero, setTablero] = useState(crearTablero);

  return (
    <main>
      <header>
        <h1>memory</h1>
        <button
          className="btn-iniciar"
          onClick={() => setTablero(crearTablero)}
        >
          Nueva partida
        </button>
      </header>

      <section id="grilla-container">
        {tablero.map((ficha) => (
          <button
            className="ficha"
            key={ficha.id}
            onClick={() => {
              if (ficha.dadaVuelta || ficha.encontrada) return;

              setTablero((tableroActual) =>
                tableroActual.map((fichaActual) =>
                  fichaActual.id === ficha.id
                    ? { ...fichaActual, dadaVuelta: true }
                    : fichaActual,
                ),
              );
            }}
          >
            {ficha.dadaVuelta || ficha.encontrada ? ficha.valor : ""}
          </button>
        ))}
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-card">
            <h5>Tiempo</h5>
          </div>
          <div className="footer-card">
            <h5>Movimientos</h5>
          </div>
        </div>
      </footer>
    </main>
  );
}
