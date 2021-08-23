import React, { useState } from "react";
import RegistrarPagoForm from "./RegistrarPagoForm.js";
import { obtenerPagos, registrarPago } from "../../dao/CuentaDao.js";
import { useAlert } from "react-alert";
import PagosTable from "./PagosTable.js";
import handleError from "../../utils/handleError.js";

const GestionPagos = () => {
  const alert = useAlert();

  const defaultStateEfectivo = {
    nroRecibo: "",
  };

  const defaultStateTransferencia = {
    cbuOrigen: "",
    cbuDestino: "",
    codigoTransferencia: "",
  };

  const defaultStateCheque = {
    nroCheque: "",
    fechaCobro: "",
    banco: "",
  };

  const defaultState = {
    fechaPago: new Date().toISOString(),
    cliente: {
      id: "",
    },
    medio: {
      observacion: "",
      ...defaultStateEfectivo,
    },
  };

  const [state, setState] = useState(defaultState);

  const [pagos, setPagos] = useState([]);

  const fetchData = async (idCliente) => {
    const result = await obtenerPagos(idCliente);

    setPagos(result.data);
  };

  const handleChanges = (item) => (event) => {
    setState({ ...state, [item]: event.target.value });
  };

  const handleClienteChanges = (item) => (event) => {
    setState({
      ...state,
      cliente: { ...state.cliente, [item]: event.target.value },
    });
  };

  const handleMedioChanges = (item) => (event) => {
    setState({
      ...state,
      medio: { ...state.medio, [item]: event.target.value },
    });
  };

  const setMedioState = (medioState) => {
    setState({
      ...state,
      medio: { observacion: state.medio.observacion, ...medioState },
    });
  };

  const onMedioChange = (medio) => {
    switch (medio) {
      case "efectivo":
        setMedioState(defaultStateEfectivo);
        break;
      case "transferencia":
        setMedioState(defaultStateTransferencia);
        break;
      case "cheque":
        setMedioState(defaultStateCheque);
        break;
      default:
        console.log("Medio invalido");
        break;
    }
  };

  const onSubmit = (data) => {
    console.log(data);

    registrarPago(state.cliente.id, data)
      .then((res) => {
        alert.success("Pago registrado!");

        console.log(res);

        setState(defaultState);
        setMedioState("efectivo");
      })
      .catch((err) => {
        handleError(err, alert);
      });
  };

  return (
    <main>
      <div className="mb-3">
        <PagosTable data={pagos} onSearch={fetchData} />
      </div>
      <RegistrarPagoForm
        state={state}
        handleChanges={handleChanges}
        handleClienteChanges={handleClienteChanges}
        handleMedioChanges={handleMedioChanges}
        defaultMedio="efectivo"
        onMedioChange={onMedioChange}
        onSubmit={onSubmit}
      />
    </main>
  );
};

export default GestionPagos;
