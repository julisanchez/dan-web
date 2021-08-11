import axios from "axios";

class ClienteDao {
  registrarCliente(cliente) {
    axios.post("http://localhost:9000/api/cliente/", cliente);
  }
}
