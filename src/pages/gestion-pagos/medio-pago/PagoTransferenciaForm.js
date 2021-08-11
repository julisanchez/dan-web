const PagoTransferenciaForm = () => (
  <div>
    <div className="mb-2">
      <label htmlFor="cbuOrigen" className="form-label">
        CBU Origen
      </label>
      <input
        id="cbuOrigen"
        name="cbuOrigen"
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
        name="cbuDestino"
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
        name="codigoTran"
        type="number"
        className="form-control"
      />
    </div>
  </div>
);

export default PagoTransferenciaForm;
