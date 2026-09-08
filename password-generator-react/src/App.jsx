import InputPassword from "./components/InputPassword";
import "./App.css";

function App() {
  return (
    <>
      <main id="carta">
        <h3>Generador de contraseñas</h3>
        <section className="container">
          <form id="generador-caracteres">
            <InputPassword />
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
