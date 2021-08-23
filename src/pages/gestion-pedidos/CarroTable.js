import CarroRow from "./CarroRow";

const CarroTable = ({ data }) => {
  const tableRows = data.map((producto) => (
    <CarroRow key={producto.producto.id} data={producto} />
  ));
  var total = 0;

  data.forEach((producto) => {
    total += producto.cantidad * producto.precio;
  });

  return (
    <div className="container shadow rounded p-3 bg-white">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
          <tr>
            <td />
            <td />
            <td />
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarroTable;
