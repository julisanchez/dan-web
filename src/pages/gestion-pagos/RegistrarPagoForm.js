import React, { useState } from "react";
import MedioPagoForm from "./medio-pago/MedioPagoForm";

const RegistrarPagoForm = ({
  state,
  handleChanges,
  handleClienteChanges,
  handleMedioChanges,
  defaultMedio,
  onMedioChange,
  onSubmit,
}) => {
  const [medio, setMedio] = useState(defaultMedio);

  const _onMedioChange = (event) => {
    const medio = event.target.value;

    onMedioChange(medio);
    setMedio(medio);
  };

  const _onSubmit = (event) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <div className="container shadow rounded-3 p-3 text-start bg-white">
      <form onSubmit={_onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Registrar pago</h1>
        <div className="mb-2">
          <label htmlFor="clienteId" className="form-label">
            Cliente Id
          </label>
          <input
            id="clienteId"
            state={state.cliente.id}
            onChange={handleClienteChanges("id")}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="observacion" className="form-label">
            Observacion
          </label>
          <input
            id="observacion"
            value={state.medio.observacion}
            onChange={handleMedioChanges("observacion")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="medioPago" className="form-label">
            Medio de pago
          </label>
          <select
            id="medioPago"
            name="medioPago"
            className="form-control"
            onChange={_onMedioChange}
          >
            <option value="efectivo">Efectivo</option>
            <option value="cheque">Cheque</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>
        <MedioPagoForm
          medio={medio}
          state={state.medio}
          handleChanges={handleMedioChanges}
        />
        <input type="submit" value="Pagar" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default RegistrarPagoForm;
