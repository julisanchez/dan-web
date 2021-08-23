import axios from "axios";

export function registrarCliente(cliente) {
  return axios.post("/usuario/api/cliente", cliente);
}

export function guardarObra(obra) {
  return axios.post("/usuario/api/obra");
}

export function logear(usuario) {
  
}
