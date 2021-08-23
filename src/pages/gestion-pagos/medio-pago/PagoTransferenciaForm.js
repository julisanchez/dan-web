const PagoTransferenciaForm = ({ state, handleChanges }) => (
  <div>
    <div className="mb-2">
      <label htmlFor="cbuOrigen" className="form-label">
        CBU Origen
      </label>
      <input
        id="cbuOrigen"
        value={state.cbuOrigen}
        onChange={handleChanges("cbuOrigen")}
        type="text"
        className="form-control"
      />
    </div>
    <div className="mb-2">
      <label htmlFor="cbuDestino" className="form-label">
        CBU Destino
      </label>
      <input
        id="cbuDestino"
        value={state.cbuDestino}
        onChange={handleChanges("cbuDestino")}
        type="text"
        className="form-control"
      />
    </div>
    <div className="mb-2">
      <label htmlFor="codigoTran" className="form-label">
        Codigo de transferencia
      </label>
      <input
        id="codigoTran"
        value={state.codigoTransferencia}
        onChange={handleChanges("codigoTransferencia")}
        type="number"
        className="form-control"
      />
    </div>
  </div>
);

export default PagoTransferenciaForm;
