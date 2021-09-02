import RegistrarArticuloForm from "./RegistrarArticuloForm";
import { registrarArticulo } from "../../dao/BlogDao";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import handleError from "../../utils/handleError";

const GestionBlog = (props) => {
  const alert = useAlert();

  const [state, setState] = useState({
    titulo: "",
    descripcion: "",
    autor: "",
    secciones: [{ titulo: "", texto: "" }],
  });

  const handleChanges = (item) => (event) => {
    setState({ ...state, [item]: event.target.value });
  };

  const handleSeccionChanges = (item) => (event) => {
    setState({...state, secciones: [{...state.secciones[0], [item]: event.target.value}]})
  }

  const onSubmit = (data) => {
    console.log(data);

    registrarArticulo(data)
      .then((res) => {
        alert.success("Articulo registrado!");

        console.log(res);
      })
      .catch((err) => {
        handleError(err, alert);
      });
  };

  return (
    <RegistrarArticuloForm
      state={state}
      handleChanges={handleChanges}
      handleSeccionChanges={handleSeccionChanges}
      onSubmit={onSubmit}
    />
  );
};

export default GestionBlog;
