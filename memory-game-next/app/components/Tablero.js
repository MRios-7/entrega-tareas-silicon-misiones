import Ficha from "./Ficha";

function Tablero({ fichas, onFichaClick, evaluando }) {
  return (
    <section id="grilla-container">
      {fichas.map((ficha) => (
        <Ficha
          key={ficha.id}
          ficha={ficha}
          onClick={() => onFichaClick(ficha)}
          deshabilitada={evaluando}
        />
      ))}
    </section>
  );
}

export default Tablero;
