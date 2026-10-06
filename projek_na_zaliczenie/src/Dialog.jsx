function Dialog({ onZamknij, children }) {
  return (
    <div className="dialog-tlo">
      <div className="dialog">
        <button className="dialog-zamknij" onClick={onZamknij}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}
export default Dialog;
