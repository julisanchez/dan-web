import React from "react";
import PagoChequeForm from "./PagoChequeForm";
import PagoEfectivoForm from "./PagoEfectivoForm";
import PagoTransferenciaForm from "./PagoTransferenciaForm";

const MedioPagoForm = (props) => {
  switch (props.medio) {
    case 'efectivo':
      return <PagoEfectivoForm />;
    case 'cheque':
      return <PagoChequeForm />;
    case 'transferencia':
      return <PagoTransferenciaForm />;
    default:
      return <p>Error: medio de pago desconocido</p>;
  }
};

export default MedioPagoForm;
