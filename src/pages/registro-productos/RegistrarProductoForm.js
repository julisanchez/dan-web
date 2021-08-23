import React from "react";

const RegistrarProductoForm = ({ state, handleChange, onSubmit }) => {
  const _onSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <main className="container shadow rounded-3 p-3 text-start bg-white">
      <form onSubmit={_onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Alta Producto</h1>
        <div className="mb-2">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            id="nombre"
            value={state.nombre}
            onChange={handleChange("nombre")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="descripcion" className="form-label">
            Descripcion
          </label>
          <input
            id="descripcion"
            value={state.descripcion}
            onChange={handleChange("descripcion")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="precio" className="form-label">
            Precio
          </label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              id="precio"
              value={state.precio}
              onChange={handleChange("precio")}
              type="number"
              step="0.01"
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="stockMinimo" className="form-label">
            Stock minimo
          </label>
          <input
            id="stockMinimo"
            value={state.stockMinimo}
            onChange={handleChange("stockMinimo")}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="stockActual" className="form-label">
            Stock actual
          </label>
          <input
            id="stockActual"
            value={state.stockActual}
            onChange={handleChange("stockActual")}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="unidad" className="form-label">Unidad</label>
        </div>
        <input type="submit" value="Guardar" className="btn btn-primary" />
      </form>
    </main>
  );
};

export default RegistrarProductoForm;
