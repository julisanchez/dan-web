const RegistroObrasForm = ({state, handleChange, onSubmit}) => {
  const _onSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <div className="container rounded p-3 text-start bg-white shadow">
      <form onSubmit={_onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Registrar Obra</h1>
        <div className="mb-2">
          <label htmlFor="description" className="form-label">
            Descripcion
          </label>
          <input
            id="descripcion"
            value={state.descripcion}
            onChange={handleChange("descripcion")}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div className="mb-2">
          <label htmlFor="tipoObra">Tipo de obra</label>
          <select
            id="tipoObra"
            value={state.tipoObra}
            onChange={handleChange("tipoObra")}
            className="form-control"
          >
            <option value=""></option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="latitud" className="form-label">
            Latitud
          </label>
          <input
            id="latitud"
            value={state.latitud}
            onChange={handleChange("latitud")}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="longitud" className="form-label">
            Longitud
          </label>
          <input
            id="longitud"
            value={state.longitud}
            onChange={handleChange("longitud")}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="direccion" className="form-label">
            Direccion
          </label>
          <input
            id="direccion"
            value={state.direccion}
            onChange={handleChange("direccion")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="superficie" className="form-label">
            Superficie
          </label>
          <input
            id="superficie"
            value={state.superficie}
            onChange={handleChange("superficie")}
            type="number"
            className="form-control"
          />
        </div>
        <input
          type="submit"
          value="Registrar"
          className="btn btn-primary"
        ></input>
      </form>
    </div>
  );
};

export default RegistroObrasForm;
