import axios from "axios";

export function registrarPago(idCliente, pago) {
  return axios.post(`/cuenta/api/cuenta/${idCliente}/pago`, pago);
}

export function obtenerPagos(idCliente) {
  return axios.get(`/cuenta/api/cuenta/${idCliente}/pago`);
}
