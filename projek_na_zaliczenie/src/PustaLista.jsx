function PustaLista({ tekst }) {
  return (
    <div className="pusta-lista">
      <p className="pusta-lista-icon">@</p>
      <p>{tekst}</p>
    </div>
  );
}
export default PustaLista;
