import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import menuApi from "../../api/menuApi";
import "./css/navBar.css";
import Swal from "sweetalert";
import { Modal } from "react-bootstrap";

export const NavbarC = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [verificarAdmin, setVerificarAdmin] = useState(true);

  //mostrar navbar segun rol
  const verificarRol = async () => {
    try {
      const resp = await menuApi.get("admin/nav");

      if (resp.data.rol === "admin") {
        setVerificarAdmin(true);
        return;
      } else {
        setVerificarAdmin(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verificarRol();
  }, []);

  const navigate = useNavigate();

  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Funcionamiento Modal

  const modalOpen = () =>{
    setShowModal(true)
    setTimeout(() => {
      setShowModal(false)
    }, 3000);
    
  }

  // Eliminar productos independientes
  const EliminarProducto = (menu) => {
    const resultado = allProducts.filter((item) => item._id !== menu._id);

    setTotal(total - menu.precio * menu.quantity);
    setCountProducts(countProducts - menu.quantity);
    setAllProducts(resultado);
  };

  // Generar pedido
  const generarPedido = () => {
    setActive(!active);
    navigate("/pedidos");
  };

  // Reiniciar el carrito a valor cero
  const vaciarCarrito = () => {
    Swal({
      title: "¿Vaciar carrito?",
      text: "Esta acción limpiará todos los menús seleccionados",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Swal("¡Carrito limpio! carga nuevos menús :)", {
          icon: "success",
        });
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
      } else {
        Swal(
          "¡Tú carrito sigue intacto! puedes cargar más menús o confirma el pedido :)"
        );
      }
    });
  };

  return (
    <div className="navBar w-100">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Link to="/home">
                <img
                  src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png"
                  alt=""
                  className="mx-2 navImg"
                />
              </Link>
              <div className="navLinks">
                <NavLink onClick={modalOpen}
                  className={({ isActive }) =>
                    `nav-item nav-link ${isActive ? "active" : ""}`
                  }
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink onClick={modalOpen}
                  className={({ isActive }) =>
                    `nav-item nav-link ${isActive ? "active" : ""} ms-auto`
                  }
                  to="/menu"
                >
                  Nuestros menus
                </NavLink>
                {!verificarAdmin ? (
                  <NavLink onClick={modalOpen}
                    className={({ isActive }) =>
                      `nav-item nav-link ${isActive ? "active" : ""}`
                    }
                    to="/pedidos"
                    >
                    Pedidos
                  </NavLink>
                ) : (
                  ""
                )}
                <NavLink onClick={modalOpen}
                  className={({ isActive }) =>
                    `nav-item nav-link ${isActive ? "active" : ""}`
                  }
                  to="/nosotros"
                >
                  Sobre nosotros
                </NavLink>

                {verificarAdmin && (
                  <NavLink onClick={modalOpen}
                    className={({ isActive }) =>
                      `nav-item nav-link ${isActive ? "active" : ""}`
                    }
                    to="/administration"
                  >
                    Administracion
                  </NavLink>
                )}
              </div>

              <NavLink to="/" className="logoutBtn">
                <button className="nav-item nav-link btn ">Logout</button>
              </NavLink>

              {!verificarAdmin ? (
                <NavLink className="cartBtn">
                  <button
                    className="nav-item nav-link btn "
                    onClick={() => setActive(!active)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>

                    <div className="count-products">
                      <span id="contador-productos">{countProducts}</span>
                    </div>
                  </button>
                </NavLink>
              ) : (
                ""
              )}

              {!verificarAdmin ? (
                <div
                  className={`container-cart-products ${
                    active ? "" : "hidden-cart"
                  }`}
                >
                  {allProducts.length ? (
                    <>
                      <div className="cart-empty-container">
                        <div className="container-cart-products-title">
                          Carrito de compras
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="icon-close"
                          onClick={() => setActive(!active)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div className="container-cart-products-scroll">
                        {allProducts.map((menu) => (
                          <div className="cart-product" key={menu._id}>
                            <div className="info-cart-product">
                              <span className="cantidad-producto-carrito">
                                ({menu.quantity})
                              </span>
                              <p className="titulo-producto-carrito">
                                • {menu.nombre} •
                              </p>
                              <span className="precio-producto-carrito">
                                ${menu.quantity * menu.precio}
                              </span>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="icon-close"
                              onClick={() => EliminarProducto(menu)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        ))}
                      </div>
                      <div className="cart-total">
                        <h3>Total:</h3>
                        <span className="total-pagar">${total}</span>
                      </div>
                      <div className="btn-cart-event">
                        <button
                          className="btn-generar-pedido"
                          onClick={() => generarPedido()}
                        >
                          Generar pedido
                        </button>
                        <button
                          className="btn-clear-all"
                          onClick={() => vaciarCarrito()}
                        >
                          Vaciar carrito
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="cart-empty-container">
                      <span className="cart-empty">El carrito está vacío</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon-close"
                        onClick={() => setActive(!active)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            centered
            className="loadingModal"
          >
            <Modal.Body className="loadingModalBody">
              <div className="loading-container">
                <div className="spinner"></div>
                <div className="spinner-center"></div>
                <div className="loading-text text-light">Cargando...</div>
              </div>
            </Modal.Body>
          </Modal>
    </div>
  );
};
