const PagoChequeForm = ({ state, handleChanges }) => (
  <div>
    <div className="mb-2">
      <label htmlFor="nroCheque" className="form-label">
        Nro. de cheque
      </label>
      <input
        id="nroCheque"
        value={state.nroCheque}
        onChange={handleChanges("nroCheque")}
        type="number"
        className="form-control"
      />
    </div>
    <div className="mb-2">
      <label htmlFor="fechaCobro" className="form-label">
        Fecha de cobro
      </label>
      <input
        id="fechaCobro"
        value={state.fechaCobro}
        onChange={handleChanges("fechaCobro")}
        type="date"
        className="form-control"
      />
    </div>
    <div className="mb-2">
      <label htmlFor="banco" className="form-label">
        Banco
      </label>
      <input
        id="banco"
        value={state.banco}
        onChange={handleChanges("banco")}
        type="text"
        className="form-control"
      />
    </div>
  </div>
);

export default PagoChequeForm;
