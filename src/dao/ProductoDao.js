import axios from "axios";

export function guardarProducto(producto) {
  return axios.post("/material/api/material", producto);
}

export function obtenerProductos() {
  return axios.get("/material/api/material");
}