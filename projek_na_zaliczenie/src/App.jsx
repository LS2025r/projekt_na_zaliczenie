import { useState } from "react";
import { Gry } from "./Data";
import ListGier from "./ListGier";
import "./App.css";

function App() {
  const [game, setGame] = useState(Gry);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Moja kolekcja gier</h1>
        <p className="app-subtitle">Liczba gier w kolekcji: {game.length}</p>
      </header>

      <main>
        <ListGier game={game} />
      </main>
    </div>
  );
}

export default App;
