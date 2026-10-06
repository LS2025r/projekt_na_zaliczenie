import GameKarta from "./Gry";

function ListGier({ gry, onEdytuj, onUsun }) {
  return (
    <ul className="games-list">
      {gry.map((game) => (
        <GameKarta
          key={game.id}
          game={game}
          onEdytuj={onEdytuj}
          onUsun={onUsun}
        />
      ))}
    </ul>
  );
}

export default ListGier;
