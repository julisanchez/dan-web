import React, { useState } from "react";
import { guardarObra } from "../../dao/UsuariosDao";
import RegistroObrasForm from "./RegistroObrasForm";
import { useAlert } from "react-alert";
import handleError from "../../utils/handleError";

const RegistroObras = (props) => {
  const alert = useAlert();

  const defaultState = {
    descripcion: "",
    tipo: { descripcion: "" },
    latitud: "",
    longitud: "",
    direccion: "",
    superficie: "",
  };

  const [state, setState] = useState(defaultState);

  const handleChange = (input) => (event) => {
    setState({ ...state, [input]: event.target.value });
  };

  const handleTipoChange = (event) => {
    setState({ ...state, tipo: { descripcion: event.target.value } });
  };

  const onSubmit = (data) => {
    console.log(data);

    guardarObra(data)
      .then((res) => {
        alert.success(res);
      })
      .catch((err) => {
        handleError(err, alert);
        setState(defaultState);
      });
  };

  return (
    <RegistroObrasForm
      state={state}
      handleChange={handleChange}
      handleTipoChange={handleTipoChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegistroObras;
