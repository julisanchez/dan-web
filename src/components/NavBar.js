import { Link } from "react-router-dom";
const NavBar = () => (
  <div className="nav nav-pills bg-dark">
    <li className="nav-item">
      <Link to="/login" className="nav-link text-white">
        Login
      </Link>
    </li>
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle text-white"
        data-bs-toggle="dropdown"
        href="#"
      >
        Registrar
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to="/registro-clientes" className="dropdown-item">
            Cliente
          </Link>
        </li>
        <li>
          <Link to="/registro-obras" className="dropdown-item">
            Obra
          </Link>
        </li>
        <li>
          <Link to="/alta-producto" className="dropdown-item">
            Alta de productos
          </Link>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <Link to="/gestion-pedidos" className="nav-link text-white">
        Pedidos
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/gestion-pagos" className="nav-link text-white">
        Pagos
      </Link>
    </li>
  </div>
);

export default NavBar;
