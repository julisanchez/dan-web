import SeccionesForm from "./SeccionesForm";

const RegistrarArticuloForm = ({ state, handleChanges, handleSeccionChanges, onSubmit }) => {
  const _onSubmit = (event) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <div className="container shadow rounded-3 p-3 text-start bg-white">
      <form onSubmit={_onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Registrar articulo</h1>
        <div className="mb-2">
          <label htmlFor="titulo" className="form-label">
            Titulo
          </label>
          <input id="titulo" value={state.titulo} onChange={handleChanges("titulo")} type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label htmlFor="descripcion" className="form-label">
            Descripcion
          </label>
          <textarea id="descripcion" value={state.descripcion} onChange={handleChanges("descripcion")} className="form-control" />
        </div>
        <hr />
        <SeccionesForm state={state.secciones[0]} handleChanges={handleSeccionChanges}/>
        <hr />
        <div className="mb-2">
          <label htmlFor="autor" className="form-label">
            Autor
          </label>
          <input id="autor" value={state.autor} onChange={handleChanges("autor")} type="text" className="form-control" />
        </div>
        <input type="submit" value="Publicar" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default RegistrarArticuloForm;
