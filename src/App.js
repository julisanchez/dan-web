import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/Login.js";
import RegistroClientes from "./pages/registro-clientes/RegistroClientes";
import RegistroObras from "./pages/registro-obras/RegistroObras";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AltaProducto from "./pages/registro-productos/AltaProducto";
import GestionPedidos from "./pages/gestion-pedidos/GestionPedidos";
import GestionPagos from "./pages/gestion-pagos/GestionPagos";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Login} />
        <div className="mt-4">
          <Route path="/login" component={Login} />
          <Route path="/registro-clientes" component={RegistroClientes} />
          <Route path="/registro-obras" component={RegistroObras} />
          <Route path="/alta-producto" component={AltaProducto} />
          <Route path="/gestion-pedidos" component={GestionPedidos} />
          <Route path="/gestion-pagos" component={GestionPagos} />
        </div>
      </Router>
    </div>
  );
}

export default App;
