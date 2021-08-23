import axios from "axios";

export function registrarPedido(pedido) {
  return axios.post("/pedido/api/pedido", pedido);
}
