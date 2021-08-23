import RegistroClientesForm from "./RegistroClientesForm";
import React, { useState } from "react";
import RegistroObrasForm from "../registro-obras/RegistroObrasForm";
import RegistrarUsuarioForm from "./RegistrarUsuarioForm";
import { registrarCliente } from "../../dao/UsuariosDao";
import { useAlert } from "react-alert";
import handleError from "../../utils/handleError";

const RegistroClientes = () => {
  const alert = useAlert();

  const defaultState = {
    razonSocial: "",
    cuit: "",
    mail: "",
    maxCuentaCorriente: "",
    habilitadoOnline: false,
    usuario: {
      user: "",
      password: "",
    },
    obras: [
      {
        descripcion: "",
        tipo: { descripcion: "" },
        latitud: "",
        longitud: "",
        direccion: "",
        superficie: "",
      },
    ],
  };

  const [state, setState] = useState(defaultState);

  const [step, setStep] = useState(1);

  const handleChange = (input) => (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setState({ ...state, [input]: value });
  };

  const handleUserChange = (input) => (e) => {
    setState({
      ...state,
      usuario: { ...state.usuario, [input]: e.target.value },
    });
  };

  const handleObraChange = (input) => (e) => {
    const temp = { ...state };
    temp.obras[0] = { ...temp.obras[0], [input]: e.target.value };
    setState(temp);
  };

  const handleTipoObraChange = (e) => {
    const temp = { ...state };
    temp.obras[0] = { ...temp.obras[0], tipo: { descripcion: e.target.value } };
    setState(temp);
  };

  const handleSubmit = () => {
    console.log(state);

    registrarCliente(state)
      .then((res) => {
        console.log(res);

        alert.success("Cliente creado!");
        setStep(1);
        setState(defaultState);
      })
      .catch((err) => {
        handleError(err, alert);
      });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <RegistroClientesForm
          state={state}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <RegistrarUsuarioForm
          state={state.usuario}
          handleChange={handleUserChange}
          previousStep={previousStep}
          nextStep={nextStep}
        />
      );
    case 3:
      return (
        <RegistroObrasForm
          state={state.obras[0]}
          handleChange={handleObraChange}
          handleTipoChange={handleTipoObraChange}
          onSubmit={handleSubmit}
        />
      );
    default:
      console.log("Step desconocido");
  }
};
export default RegistroClientes;
