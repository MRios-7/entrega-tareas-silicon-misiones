"use client";
import { useEffect, useState } from "react";
import Encabezado from "./components/Encabezado";
import PantallaInicio from "./components/PantallaInicio";
import PantallaVictoria from "./components/PantallaVictoria";
import PieDePagina from "./components/PieDePagina";
import Tablero from "./components/Tablero";

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

function Home() {
  const [tablero, setTablero] = useState(crearTablero);
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
    const fichasDadasVuelta = tablero.filter(fichaEstaDadaVuelta);

    if (fichasDadasVuelta.length !== 2) return;

    const [primeraFicha, segundaFicha] = fichasDadasVuelta;
    const sonIguales = primeraFicha.valor === segundaFicha.valor;
    const tiempoDeEspera = sonIguales ? 0 : 800;

    const temporizador = setTimeout(() => {
      if (sonIguales) {
        marcarComoEncontradas(primeraFicha.id, segundaFicha.id);
      } else {
        ocultarFichas(primeraFicha.id, segundaFicha.id);
      }

      setEvaluando(false);
    }, tiempoDeEspera);

    return () => clearTimeout(temporizador);
  }, [tablero]);

  function fichaEstaDadaVuelta(ficha) {
    return ficha.dadaVuelta && !ficha.encontrada;
  }

  function marcarComoEncontradas(idPrimeraFicha, idSegundaFicha) {
    setTablero((tableroActual) =>
      tableroActual.map((ficha) => {
        const esUnaFichaEncontrada =
          ficha.id === idPrimeraFicha || ficha.id === idSegundaFicha;

        if (esUnaFichaEncontrada) {
          return { ...ficha, encontrada: true };
        }

        return ficha;
      }),
    );
  }

  function ocultarFichas(idPrimeraFicha, idSegundaFicha) {
    setTablero((tableroActual) =>
      tableroActual.map((ficha) => {
        const debeOcultarse =
          ficha.id === idPrimeraFicha || ficha.id === idSegundaFicha;

        if (debeOcultarse) {
          return { ...ficha, dadaVuelta: false };
        }

        return ficha;
      }),
    );
  }

  function manejarClickFicha(ficha) {
    if (evaluando) return;
    if (ficha.dadaVuelta) return;
    if (ficha.encontrada) return;

    if (!jugando) {
      setJugando(true);
    }

    const fichasDadasVuelta = tablero.filter(fichaEstaDadaVuelta);

    if (fichasDadasVuelta.length === 1) {
      setEvaluando(true);
      setMovimientos((movimientosActuales) => movimientosActuales + 1);
    }

    setTablero((tableroActual) =>
      tableroActual.map((fichaActual) => {
        if (fichaActual.id === ficha.id) {
          return { ...fichaActual, dadaVuelta: true };
        }

        return fichaActual;
      }),
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
    <main>
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

export default Home;
