import Axios from "axios";
import React, { useState } from "react";

const RegistroClientesForm = (props) => {
  const { state, handleChange, nextStep } = props;

  const onSubmit = (e) => {
    nextStep();
    e.preventDefault();
  };

  return (
    <div className="container rounded p-3 text-start bg-white shadow">
      <h1 className="h3 mb-3 fw-normal">Registrar Cliente</h1>
      <form onSubmit={onSubmit}>
        <div>
          <div className="mb-2">
            <label htmlFor="razonSocial" className="form-label">
              Razon Social
            </label>
            <input
              id="razonSocial"
              value={state.razonSocial}
              onChange={handleChange("razonSocial")}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="cuit" className="form-label">
              CUIT
            </label>
            <input
              id="cuit"
              value={state.cuit}
              onChange={handleChange("cuit")}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="mail" className="form-label">
              Mail
            </label>
            <input
              id="mail"
              value={state.mail}
              onChange={handleChange("mail")}
              type="email"
              className="form-control"
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="maxCuentaCorriente" className="form-label">
              Maximo Cuenta Corriente
            </label>
            <input
              id="maxCuentaCorriente"
              value={state.maxCuentaCorriente}
              onChange={handleChange("maxCuentaCorriente")}
              type="number"
              className="form-control"
            ></input>
          </div>
          <div className="mb-2 form-check">
            <input
              id="habilitadoOnline"
              checked={state.habilitadoOnline}
              onChange={handleChange("habilitadoOnline")}
              type="checkbox"
              className="form-check-input"
            ></input>
            <label htmlFor="habilitadoOnline" className="form-check-label">
              Habilitado online
            </label>
          </div>
          <input value="Siguiente" type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default RegistroClientesForm;
