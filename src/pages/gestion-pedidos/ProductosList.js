import React from "react";
import Producto from "./Producto";

const ProductosList = ({ data, onAdd }) => {
  const prodComponents = data.map((producto, index) => (
    <Producto key={producto.id} data={producto} onAdd={onAdd} />
  ));

  return (
    <div className="container p-3">
      <div className="row">{prodComponents}</div>
    </div>
  );
};

export default ProductosList;
