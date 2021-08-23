const RegistrarPedidoForm = ({ state, handleChange, handleObraId, onSubmit }) => {
  const _onSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <main className="container shadow rounded p-3 text-start bg-white">
      <form onSubmit={_onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Registrar pedido</h1>
        <div className="mb-2">
          <label htmlFor="obraId" className="form-label">
            Obra Id
          </label>
          <input
            id="obraId"
            value={state.obraId}
            type="number"
            onChange={handleObraId}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="fechaPedido" className="form-label">
            Fecha de pedido
          </label>
          <input
            id="fechaPedido"
            value={state.fechaPedido}
            onChange={handleChange("fechaPedido")}
            className="form-control"
            type="date"
          />
        </div>
        {/*
                  TODO: Mostrar tabla de pedidos, cada producto tiene descripcion, 
                  precio y se debe ingresar cantidad para comprar
               */}
        <input type="submit" value="Registrar" className="btn btn-primary"/>
        
      </form>
    </main>
  );
};

export default RegistrarPedidoForm;
