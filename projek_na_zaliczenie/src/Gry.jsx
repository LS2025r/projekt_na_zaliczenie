function GameKarta({ game, onEdytuj, onUsun }) {
  console.log("Karta dtarla", game);
  return (
    <li className={"game-card platform-" + game.platformy.replace(" ", "-")}>
      <div className="game-info">
        <h2 className="game-title">{game.nazwa}</h2>
        <p className="game-details">
          {game.platformy}, {game.rok}
        </p>
      </div>

      <div className="game-meta">
        <span className="game-rating">{game.ocena}/10</span>
        {game.ukonczona ? (
          <span className="badge badge-done">Ukończona</span>
        ) : (
          <span className="badge">W trakcie</span>
        )}
      </div>

      <div className="game-actions">
        <button
          className="btn btn-small btn-secondary"
          onClick={() => onEdytuj(game)}
        >
          Edytuj
        </button>
        <button
          className="btn btn-small btn-danger"
          onClick={() => onUsun(game)}
        >
          Usuń
        </button>
      </div>
    </li>
  );
}

export default GameKarta;
