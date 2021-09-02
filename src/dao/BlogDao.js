import axios from "axios";

export function registrarArticulo(articulo) {
    return axios.post('/blog/api/articulo', articulo);
}

export function  obtenerArticulos() {
    return axios.get('/blog/api/articulo');
}

export function obtenerArticulo(id) {
    return axios.get(`/blog/api/articulo/${id}`);
}