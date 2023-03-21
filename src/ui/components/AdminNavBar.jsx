import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink,   } from "react-router-dom";
import "./css/navBar.css";

export const adminNavBar = () => {

  return (
    <div className="navBar w-100">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container >
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto ">
            
              
                <Link to="/home">
                  <img
                    src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png"
                    alt=""
                    className="mx-2 navImg"
                  />
                </Link>
                <div className="navLinks">
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
                      `nav-item nav-link ${isActive ? "active" : ""} ms-auto`
                    }
                    to="/administration"
                  >
                    Administración de Página
                  </NavLink>
                  
                </div>
                  
                
              

              
                <NavLink to="/" className="logoutBtn">
                  <button className="nav-item nav-link btn ">
                    Logout
                  </button>
                </NavLink>
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
};
