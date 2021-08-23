import React, { useState } from "react";

const Producto = ({ data, onAdd }) => {
  const [state, setState] = useState({
    producto: { id: data.id, nombre: data.nombre },
    cantidad: 0,
    precio: data.precio,
  });

  const _onAdd = (e) => {
    e.preventDefault();
    onAdd(state);
    setState({ ...state, cantidad: 0 });
  };

  const _onChange = (e) => {
    const value = e.target.value;
    if (value <= data.stockActual)
      setState({
        ...state,
        cantidad: parseInt(value),
      });
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3 my-1">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">{data.nombre}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            ${data.precio} - {data.unidad.descripcion}
          </h6>
          <p className="card-text">{data.descripcion}</p>
          <form onSubmit={_onAdd}>
            <input
              type="number"
              value={state.cantidad === 0 ? "" : state.cantidad}
              onChange={_onChange}
              className="form-control mb-2"
            />
            <input
              type="submit"
              value="Añadir"
              className="btn btn-secondary"
              disabled={state.cantidad === 0}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Producto;
