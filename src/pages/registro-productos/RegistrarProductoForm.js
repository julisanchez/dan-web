import React, { useState } from "react";
import {useForm} from "react-hook-form";

const RegistrarProductoForm = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    props.onSubmit(data);
  };

  return (
    <main className="container shadow rounded-3 p-3 text-start bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="h3 mb-3 fw-normal">Alta Producto</h1>
        <div className="mb-2">
          <label htmlFor="descripcion" className="form-label">
            Descripcion
          </label>
          <input
            id="descripcion"
            {...register("descripcion")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="precio" className="form-label">
            Precio
          </label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              id="precio"
              {...register("precio")}
              type="number"
              step="0.01"
              className="form-control"
            />
          </div>
        </div>
        <input type="submit" value="Guardar" className="btn btn-primary" />
      </form>
    </main>
  );
};

export default RegistrarProductoForm;
