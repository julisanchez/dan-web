import { NavLink } from "react-router-dom";
const NavBar = () => (
  <div className="nav nav-pills bg-dark">
    <li className="nav-item">
      <NavLink to="/login" className="nav-link text-white">
        Login
      </NavLink>
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
          <NavLink to="/registro-clientes" className="dropdown-item">
            Cliente
          </NavLink>
        </li>
        <li>
          <NavLink to="/registro-obras" className="dropdown-item">
            Obra
          </NavLink>
        </li>
        <li>
          <NavLink to="/registro-blog" className="dropdown-item">
            Articulo
          </NavLink>
        </li>
        <li>
          <NavLink to="/alta-producto" className="dropdown-item">
            Alta de productos
          </NavLink>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <NavLink
        to="/gestion-pedidos"
        activeClassName="active"
        className="nav-link text-white"
      >
        Pedidos
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/gestion-pagos" className="nav-link text-white">
        Pagos
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/blog" className="nav-link text-white">
        Blog
      </NavLink>
    </li>
  </div>
);

export default NavBar;
