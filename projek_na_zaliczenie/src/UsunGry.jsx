function UsunGry({ gra, onPotwierdz, onAnuluj }) {
  return (
    <div>
      <h2>Usuń grę</h2>
      <p>Czy na pewno chcesz usunąć grę „{gra.nazwa}”?</p>

      <div className="dialog-actions">
        <button className="btn btn-secondary" onClick={onAnuluj}>
          Anuluj
        </button>
        <button className="btn btn-danger" onClick={onPotwierdz}>
          Usuń
        </button>
      </div>
    </div>
  );
}

export default UsunGry;
