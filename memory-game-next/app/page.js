"use client";

import { useEffect, useState } from "react";
import Encabezado from "./components/Encabezado";
import PantallaInicio from "./components/PantallaInicio";
import PantallaVictoria from "./components/PantallaVictoria";
import PieDePagina from "./components/PieDePagina";
import Tablero from "./components/Tablero";

function crearTablero() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
  const fichas = [...numeros, ...numeros]
    .sort(() => Math.random() - 0.5)
    .map((valor, indice) => ({
      id: `${valor}-${indice}-${Math.random().toString(16).slice(2)}`,
      valor,
      dadaVuelta: false,
      encontrada: false,
    }));

  return fichas;
}

export default function Home() {
  const [tablero, setTablero] = useState(() => crearTablero());
  const [evaluando, setEvaluando] = useState(false);
  const [movimientos, setMovimientos] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [jugando, setJugando] = useState(false);
  const [partidaIniciada, setPartidaIniciada] = useState(false);

  const victoria = tablero.every((ficha) => ficha.encontrada);

  useEffect(() => {
    if (!jugando || victoria) return;

    const intervalo = setInterval(() => {
      setTiempo((tiempoActual) => tiempoActual + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [jugando, victoria]);

  useEffect(() => {
    const fichasDadasVuelta = tablero.filter(
      (ficha) => ficha.dadaVuelta && !ficha.encontrada,
    );

    if (fichasDadasVuelta.length !== 2) return;

    const [primeraFicha, segundaFicha] = fichasDadasVuelta;
    const sonIguales = primeraFicha.valor === segundaFicha.valor;

    setEvaluando(true);

    const temporizador = setTimeout(
      () => {
        if (sonIguales) {
          setTablero((tableroActual) =>
            tableroActual.map((ficha) => {
              if (
                ficha.id === primeraFicha.id ||
                ficha.id === segundaFicha.id
              ) {
                return { ...ficha, encontrada: true, dadaVuelta: true };
              }

              return ficha;
            }),
          );
        } else {
          setTablero((tableroActual) =>
            tableroActual.map((ficha) => {
              if (
                ficha.id === primeraFicha.id ||
                ficha.id === segundaFicha.id
              ) {
                return { ...ficha, dadaVuelta: false };
              }

              return ficha;
            }),
          );
        }

        setEvaluando(false);
      },
      sonIguales ? 400 : 900,
    );

    return () => clearTimeout(temporizador);
  }, [tablero]);

  function manejarClickFicha(ficha) {
    if (evaluando || ficha.dadaVuelta || ficha.encontrada) return;

    if (!jugando) {
      setJugando(true);
    }

    const fichasDadasVuelta = tablero.filter(
      (item) => item.dadaVuelta && !item.encontrada,
    );

    if (fichasDadasVuelta.length === 1) {
      setMovimientos((valorActual) => valorActual + 1);
    }

    setTablero((tableroActual) =>
      tableroActual.map((fichaActual) =>
        fichaActual.id === ficha.id
          ? { ...fichaActual, dadaVuelta: true }
          : fichaActual,
      ),
    );
  }

  function reiniciarJuego() {
    setTablero(crearTablero());
    setEvaluando(false);
    setMovimientos(0);
    setTiempo(0);
    setJugando(false);
    setPartidaIniciada(true);
  }

  function iniciarPartida() {
    setPartidaIniciada(true);
    setJugando(true);
  }

  if (!partidaIniciada) {
    return <PantallaInicio onIniciarPartida={iniciarPartida} />;
  }

  if (victoria) {
    return (
      <PantallaVictoria
        tiempo={tiempo}
        movimientos={movimientos}
        onJugarDeNuevo={reiniciarJuego}
      />
    );
  }

  return (
    <main className="app-shell">
      <Encabezado onNuevaPartida={reiniciarJuego} />
      <Tablero
        fichas={tablero}
        onFichaClick={manejarClickFicha}
        evaluando={evaluando}
      />
      <PieDePagina tiempo={tiempo} movimientos={movimientos} />
    </main>
  );
}
