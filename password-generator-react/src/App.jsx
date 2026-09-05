import { useState } from "react";
import InputPassword from "./components/InputPassword";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <main>
          <section>
            <h3>Generador de contraseñas</h3>
            <form>
              <InputPassword />
            </form>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
