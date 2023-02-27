import { Nav } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./css/navBar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    
    <Nav className="navbar navbar-expand-sm navbar-dark  ">
      
      <div className="navBar d-flex bg-dark w-100 justify-content-around ">
        <div className="navbar-collapse">
          <Link className="navbar-brand" to="/home">
            <img
              src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png"
              alt=""
              className="mx-2 w-25 "
            />
          </Link>
          <div className="navbar-nav ">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""} ms-auto`
              }
              to="/menu"
            >
              Nuestros menus
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to=""
            >
              Pedidos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to=""
            >
              Sobre nosotros
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse  order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <button onClick={onLogout} className="nav-item nav-link btn">
              Logout
            </button>
          </ul>
        </div>
      </div>
    </Nav>
  );
};
