import React, { useState } from "react";
import RegistroObrasForm from "./RegistroObrasForm";

const RegistroObras = (props) => {
  const [state, setState] = useState({
    descripcion: "",
    tipoObra: "",
    latitud: "",
    longitud: "",
    direccion: "",
    superficie: "",
  });

  const handleChange = (input) => (event) => {
    setState({ ...state, [input]: event.target.value });
  };

  const onSubmit = (data) => {};

  return (
    <RegistroObrasForm
      state={state}
      handleChange={handleChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegistroObras;
