const RegistrarUsuarioForm = (props) => {
  const { state, handleChange, previousStep, nextStep } = props;

  const onSubmit = (e) => {
    nextStep();
    e.preventDefault();
  };

  return (
    <div className="container rounded p-3 text-start bg-white shadow">
      <h1 className="h3 mb-3 fw-normal">Registrar Usuario</h1>
      <form onSubmit={onSubmit}>
        <div>
          <div className="mb-2">
            <label htmlFor="usuario" className="form-label">
              Usuario
            </label>
            <input
              id="usuario"
              value={state.user}
              onChange={handleChange("user")}
              type="text"
              className="form-control"
          
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              id="password"
              value={state.password}
              onChange={handleChange("password")}
              type="password"
              className="form-control"
            
            ></input>
          </div>
          <button onClick={previousStep} className="btn btn-secundary">
            Atras
          </button>
          <input value="Siguiente" type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default RegistrarUsuarioForm;
