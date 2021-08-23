import React, { useState } from "react";
import PagoRow from "./PagoRow";

const PagosTable = ({ data, onSearch }) => {
  const [clienteId, setCliente] = useState("");

  const pagos = data.map((pago) => <PagoRow key={pago.id} data={pago} />);

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(clienteId);
  };

  return (
    <div className="container shadow rounded-3 p-3 text-start bg-white">
      <form onSubmit={onSubmit} className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              placeholder="Cliente ID"
              type="text"
              value={clienteId}
              onChange={(e) => setCliente(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Buscar" className="btn btn-secondary" />
          </div>
        </div>
      </form>
      {data.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha de pago</th>
              <th scope="col">Observacion</th>
            </tr>
          </thead>
          <tbody>{pagos}</tbody>
        </table>
      )}
    </div>
  );
};

export default PagosTable;
