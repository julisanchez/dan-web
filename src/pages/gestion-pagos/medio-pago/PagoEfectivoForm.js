const PagoEfectivoForm = ({ state, handleChanges }) => (
  <div className="mb-2">
    <label htmlFor="numeroRecibo" className="form-label">
      Numero de recibo
    </label>
    <input
      id="numeroRecibo"
      state={state.nroRecibo}
      onChange={handleChanges("nroRecibo")}
      type="number"
      className="form-control"
    />
  </div>
);

export default PagoEfectivoForm;
