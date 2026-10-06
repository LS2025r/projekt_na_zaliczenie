import { useState } from "react";
import { Gry } from "./Data";
import ListGier from "./ListGier";
import UpdateGry from "./Updategry";
import UsunGry from "./UsunGry";
import Dialog from "./Dialog";
import PustaLista from "./PustaLista";
import "./App.css";

function App() {
  const [gry, setGry] = useState(Gry);
  const [pokazFormularz, setPokazFormularz] = useState(false);
  const [edytowanaGra, setEdytowanaGra] = useState(null);
  const [graDoUsuniecia, setGraDoUsuniecia] = useState(null);
  const [szukaj, setSzukaj] = useState("");

  function dodajNowa() {
    setEdytowanaGra(null);
    setPokazFormularz(true);
  }

  function edytuj(gra) {
    setEdytowanaGra(gra);
    setPokazFormularz(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function zamknijFormularz() {
    setPokazFormularz(false);
    setEdytowanaGra(null);
  }

  function zapiszGre(nowaGra) {
    if (edytowanaGra) {
      const nowaLista = gry.map((g) => {
        if (g.id === nowaGra.id) {
          return nowaGra;
        }
        return g;
      });
      setGry(nowaLista);
    } else {
      setGry([nowaGra, ...gry]);
    }
    zamknijFormularz();
  }

  function usunGre() {
    const nowaLista = gry.filter((g) => g.id !== graDoUsuniecia.id);
    setGry(nowaLista);
    setGraDoUsuniecia(null);
  }
  const znalezioneGry = gry.filter((g) =>
    g.nazwa.toLowerCase().includes(szukaj.toLowerCase()),
  );

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Moja kolekcja gier</h1>
          <p className="app-subtitle">Liczba gier w kolekcji: {gry.length}</p>
        </div>
        <button className="btn" onClick={dodajNowa}>
          + Dodaj grę
        </button>
      </header>

      {pokazFormularz && (
        <Dialog onZamknij={zamknijFormularz}>
          <UpdateGry
            key={edytowanaGra ? edytowanaGra.id : "nowa"}
            gra={edytowanaGra}
            onZapisz={zapiszGre}
            onAnuluj={zamknijFormularz}
          />
        </Dialog>
      )}

      {graDoUsuniecia && (
        <Dialog onZamknij={() => setGraDoUsuniecia(null)}>
          <UsunGry
            gra={graDoUsuniecia}
            onPotwierdz={usunGre}
            onAnuluj={() => setGraDoUsuniecia(null)}
          />
        </Dialog>
      )}

      {/* <main>
        {gry.length === 0 ? (
          <PustaLista tekst="Brak Gier W Kolekcji" />
        ) : (
          <ListGier gry={gry} onEdytuj={edytuj} onUsun={setGraDoUsuniecia} />
        )}
      </main> */}
      <main>
        <div className="wyszukiwarka">
          <input
            className="form-input"
            type="text"
            placeholder="Szukaj gry po nazwie..."
            value={szukaj}
            onChange={(event) => setSzukaj(event.target.value)}
          />
        </div>

        {znalezioneGry.length === 0 ? (
          <PustaLista tekst="Nie znaleziono żadnych gier." />
        ) : (
          <ListGier
            gry={znalezioneGry}
            onEdytuj={edytuj}
            onUsun={setGraDoUsuniecia}
          />
        )}
      </main>
    </div>
  );
}

export default App;
