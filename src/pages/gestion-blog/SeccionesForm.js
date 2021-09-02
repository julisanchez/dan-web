const SeccionesForm = ({state, handleChanges}) => {
  return (
    <>
      {" "}
      <div className="mb-2">
        <label htmlFor="subtitulo" className="form-label">
          Subtitulo
        </label>
        <input id="subtitulo" value={state.titulo} onChange={handleChanges("titulo")} type="text" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="texto" className="form-label">
          Texto
        </label>
        <textarea id="texto" value={state.texto} onChange={handleChanges("texto")} className="form-control" />
      </div>
    </>
  );
};

export default SeccionesForm;
