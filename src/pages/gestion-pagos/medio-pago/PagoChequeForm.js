const PagoChequeForm = () => (
  <div>
    <div className="mb-2">
      <label htmlFor="nroCheque" className="form-label">
        Nro. de cheque
      </label>
      <input
        id="nroCheque"
        name="nroCheque"
        type="number"
        className="form-control"
      />
    </div>
    <div className="mb-2">
      <label htmlFor="fechaCobro" className="form-label">
        Fecha de cobro
      </label>
      <input
        type="date"
        name="fechaCobro"
        id="fechaCobro"
        className="form-control"
      />
    </div>
    <div className="mb-2">
      <label htmlFor="banco" className="form-label">
        Banco
      </label>
      <input id="banco" name="banco" type="text" className="form-control" />
    </div>
  </div>
);

export default PagoChequeForm;
