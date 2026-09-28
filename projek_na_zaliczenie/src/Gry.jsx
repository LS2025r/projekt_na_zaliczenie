function GameKarta({ game }) {
  return (
    <li className={"games-platform " + game.platform}>
      <div className="game-info">
        <h2 className="game-title">{game.nazwa}</h2>
        <p className="game-details">
          {game.platformy}, {game.rok}
        </p>
      </div>
      <div className="game-meta">
        <span className="game-rating">{game.ocena}/10</span>
        {game.ukonczona ? (
          <span className="ukonczona">Ukończona</span>
        ) : (
          <span className="w-trakcie">W trakcie</span>
        )}
      </div>
    </li>
  );
}

export default GameKarta;
