import { useState } from "react";
import { platformy } from "./Data";

function UpdateGry({ gra, onZapisz, onAnuluj }) {
  const [nazwa, setNazwa] = useState(gra ? gra.nazwa : "");
  const [platforma, setPlatforma] = useState(
    gra ? gra.platformy : platformy[0],
  );
  const [bladRok, setBladRok] = useState("");
  const [bladNazwa, setBladNazwa] = useState("");
  const [rok, setRok] = useState(gra ? gra.rok : 2026);
  const [ocena, setOcena] = useState(gra ? gra.ocena : 5);
  const [ukonczona, setUkonczona] = useState(gra ? gra.ukonczona : false);

  function zapisz(event) {
    event.preventDefault();
    let poprawny = true;

    if (nazwa.trim() === "") {
      setBladNazwa("Podaj nazwę gry.");
      poprawny = false;
    } else {
      setBladNazwa("");
    }

    if (rok === "" || Number(rok) < 1970 || Number(rok) > 2026) {
      setBladRok("Rok musi być liczbą od 1970 do 2026.");
      poprawny = false;
    } else {
      setBladRok("");
    }

    if (poprawny === false) {
      return;
    }

    const nowaGra = {
      id: gra ? gra.id : Date.now(),
      nazwa: nazwa,
      platformy: platforma,
      rok: Number(rok),
      ocena: ocena,
      ukonczona: ukonczona,
    };

    onZapisz(nowaGra);
  }

  return (
    <div>
      <h2>{gra ? "Edytuj grę" : "Dodaj grę"}</h2>

      <form className="form" onSubmit={zapisz}>
        <div className="form-field">
          <label className="form-label">Nazwa</label>
          <input
            className={bladNazwa ? "form-input input-blad" : "form-input"}
            type="text"
            value={nazwa}
            onChange={(event) => setNazwa(event.target.value)}
          />
          {bladNazwa && <p className="blad">{bladNazwa}</p>}
        </div>

        <div className="form-field">
          <label className="form-label">Platforma</label>
          <select
            className="form-input"
            value={platforma}
            onChange={(event) => setPlatforma(event.target.value)}
          >
            {platformy.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label className="form-label">Rok wydania</label>
          <input
            className={bladRok ? "form-input input-blad" : "form-input"}
            type="number"
            value={rok}
            onChange={(event) => setRok(event.target.value)}
          />
          {bladRok && <p className="blad">{bladRok}</p>}
        </div>

        <div className="form-field">
          <span className="form-label">Ocena</span>
          <div className="rating-group">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((liczba) => (
              <label
                key={liczba}
                className={
                  ocena === liczba ? "rating-option active" : "rating-option"
                }
              >
                <input
                  type="radio"
                  name="ocena"
                  checked={ocena === liczba}
                  onChange={() => setOcena(liczba)}
                />
                {liczba}
              </label>
            ))}
          </div>
        </div>

        <label className="checkbox-field">
          <input
            type="checkbox"
            checked={ukonczona}
            onChange={(event) => setUkonczona(event.target.checked)}
          />
          Ukończona
        </label>

        <div className="dialog-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onAnuluj}
          >
            Anuluj
          </button>
          <button type="submit" className="btn">
            Zapisz
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateGry;
