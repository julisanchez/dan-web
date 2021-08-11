import React, { component, useEffect, useState } from "react";
import MedioPagoForm from "./medio-pago/MedioPagoForm";

function usePagos(props) {
  const [pagos, setPagos] = useState([]);

  useEffect(() => {
    setPagos([]);
  });
}

const RegistrarPagoForm = (props) => {
  const [state, setState] = useState({
    fechaPago: "",
    cliente: {
      id: "",
    },
    medio: {
      observacion: "",

      nroRecibo:"",

      cbuOrigen:"",
      cbuDestino:"",
      codigoTransferencia: "",

      nroCheque:"",
      fechaCobro:"",
      banco: ""
    },
  });
  const [medio, setMedio] = useState("efectivo");

  const handleChanges = (item) => (e) => {
    setState({ [item]: e.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit();
  };

  return (
    <div className="container shadow rounded-3 p-3 text-start bg-white">
      <form onSubmit={onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Registrar pago</h1>
        <div className="mb-2">
          <label htmlFor="fechaPago" className="form-label">
            Fecha de pago
          </label>
          <input id="fechaPago" type="date" className="form-control" />
        </div>
        <div className="mb-2">
          <label htmlFor="clienteId" className="form-label">
            Cliente Id
          </label>
          <input id="clienteId" type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label htmlFor="observacion" className="form-label">
            Observacion
          </label>
          <input
            id="observacion"
            value={state.observacion}
            onChange={handleChanges("observacion")}
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
            onChange={(event) => setMedio(event.target.value)}
          >
            <option value="efectivo">Efectivo</option>
            <option value="cheque">Cheque</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>
        <MedioPagoForm medio={medio} />
        <input type="submit" value="Pagar" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default RegistrarPagoForm;
