import GameKarta from "./Gry";

function ListGier({ game }) {
  return (
    <ul className="lista-gier">
      {game.map((game) => (
        <GameKarta key={game.id} game={game} />
      ))}
    </ul>
  );
}

export default ListGier;
