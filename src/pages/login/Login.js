import "./signin.css";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { logear } from "../../dao/UsuariosDao";
import { useAlert } from "react-alert";

const Login = (props) => {
  const alert = useAlert();

  const [state, setState] = useState({ user: "", password: "" });

  const handleChange = (input) => (event) => {
    setState({ ...state, [input]: event.target.value });
  };

  const onSubmit = (data) => {
    logear(state)
      .then((res) => {
        alert.success(res);
      })
      .catch((err) => {
        alert.error(err.message);
      });
  };

  return (
    <LoginForm state={state} handleChange={handleChange} onSubmit={onSubmit} />
  );
};

export default Login;
