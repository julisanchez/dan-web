import Login from "../pages/login/Login.js";
import RegistroClientes from "../pages/registro-clientes/RegistroClientes";
import RegistroObras from "../pages/registro-obras/RegistroObras";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AltaProducto from "../pages/registro-productos/AltaProducto";
import GestionPedidos from "../pages/gestion-pedidos/GestionPedidos";
import GestionPagos from "../pages/gestion-pagos/GestionPagos";
import NavBar from "../components/NavBar";
import GestionBlog from "../pages/gestion-blog/GestionBlog";
import Blog from "../pages/blog/Blog";
import Articulo from "../pages/blog/Articulo.js";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div className="mt-4">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/registro-clientes" component={RegistroClientes} />
          <Route path="/registro-obras" component={RegistroObras} />
          <Route path="/alta-producto" component={AltaProducto} />
          <Route path="/gestion-pedidos" component={GestionPedidos} />
          <Route path="/gestion-pagos" component={GestionPagos} />
          <Route path="/registro-blog" component={GestionBlog} />
          <Route path="/blog/:articuloId" component={Articulo}/>
          <Route path="/blog" component={Blog} />
          <Route path="*"><h1>404</h1></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
