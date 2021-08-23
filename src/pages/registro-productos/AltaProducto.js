import React, { useState } from "react";
import RegistrarProductoForm from "./RegistrarProductoForm";
import { guardarProducto } from "../../dao/ProductoDao";
import { useAlert } from "react-alert";
import handleError from "../../utils/handleError";

const AltaProducto = () => {
  const alert = useAlert();

  const [state, setState] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stockMinimo: "",
    stockActual: "",
  });

  const handleChange = (input) => (event) => {
    setState({ ...state, [input]: event.target.value });
  };

  const onSubmit = (data) => {
    console.log(data);

    guardarProducto(data)
      .then((res) => {
        alert.success(res);
      })
      .catch((err) => {
        handleError(err, alert);
      });
  };

  return (
    <RegistrarProductoForm
      state={state}
      handleChange={handleChange}
      onSubmit={onSubmit}
    />
  );
};

export default AltaProducto;
