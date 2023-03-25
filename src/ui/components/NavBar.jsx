import { useState } from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate,  } from "react-router-dom";
import menuApi from "../../api/menuApi";
import "./css/navBar.css";

export const NavbarC = () => {
  
  const [verificarAdmin, setVerificarAdmin] = useState(false)

  //mostrar navbar segun rol
  const verificarRol = async () => {
    try {
      const resp = await menuApi.get("admin/nav");
      
      if (resp.data.rol === "admin"){
        setVerificarAdmin(true);
        return
      }
      
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    verificarRol()
  }, [])
  
  
  

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

                {verificarAdmin && 
                <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/administration"
              >
                Administracion
              </NavLink> }
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
