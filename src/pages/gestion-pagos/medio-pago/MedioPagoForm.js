import React from "react";
import PagoChequeForm from "./PagoChequeForm";
import PagoEfectivoForm from "./PagoEfectivoForm";
import PagoTransferenciaForm from "./PagoTransferenciaForm";

const MedioPagoForm = ({ medio, state, handleChanges }) => {
  switch (medio) {
    case "efectivo":
      return <PagoEfectivoForm state={state} handleChanges={handleChanges} />;
    case "cheque":
      return <PagoChequeForm state={state} handleChanges={handleChanges} />;
    case "transferencia":
      return (
        <PagoTransferenciaForm state={state} handleChanges={handleChanges} />
      );
    default:
      return <p>Error: medio de pago desconocido</p>;
  }
};

export default MedioPagoForm;
