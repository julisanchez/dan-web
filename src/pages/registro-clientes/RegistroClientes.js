import RegistroClientesForm from "./RegistroClientesForm";
import React, { useState } from "react";
import RegistroObrasForm from "../registro-obras/RegistroObrasForm";
import RegistrarUsuarioForm from "./RegistrarUsuarioForm";

const RegistroClientes = (props) => {
  const [state, setState] = useState({
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
        tipoObra: "",
        latitud: "",
        longitud: "",
        direccion: "",
        superficie: "",
      },
    ],
  });

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

  const handleObraSubmit = (data) => {
    props.onSubmit(state);
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
          onSubmit={handleObraSubmit}
        />
      );
  }
};
export default RegistroClientes;
