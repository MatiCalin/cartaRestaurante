import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./css/login.css";
import Alert from "react-bootstrap/Alert";
import menuApi from "../../api/menuApi";
import Modal from "react-bootstrap/Modal";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [showModal, setShowModal] = useState(false);



  const startLogin = async (email, password) => {
    try {
      const resp = await menuApi.post("/auth/", {
        email,
        password,
      });

      //guardamos token en localStorage
      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("usr", btoa(resp.data.name));
      
      if (resp.data.rol === "usuario") {
        // Mostrar el modal
    setShowModal(true);
        setTimeout(() => {
          navigate("/home");
          
        }, 3000);
      } else {
        
        setTimeout(() => {
          navigate("/administration");
        }, 3000);
      }
    } catch ({ response }) {
      setError(true);
      setMsgError(response.data.msg);
      
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
    
  };

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    

    //inicioValidaciones
    if (email.trim() === "") {
      setErrorEmail(true);
      setTimeout(() => {
        setErrorEmail(false);
      }, 4000);
      return
    } else if (password.trim() === "") {
      setErrorContraseña(true);
      setTimeout(() => {
        setErrorContraseña(false);
      }, 4000);
      return
    } else if (email.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/)) {
    }
    //finValidaciones

    

    startLogin(email, password);
  };

  const navigate = useNavigate();

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorContraseña, setErrorContraseña] = useState(false);

  return (
    <div>
      <section className="loginSection">
        <div className="text-center mt-5 py-1">
          <h1 className="text-light">¡Bienvenidos comensales!</h1>
        </div>

        {error ? (
          <div className="errorStyle">
            <h3>{msgError}</h3>
          </div>
        ) : (
          ""
        )}

        <div className="d-flex align-items-center justify-content-center  text-light formulario-login">
          <img
            src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png"
            alt=""
            className="w-25 h-25"
          />
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

          <Form onSubmit={handleSubmit} className="px-3 my-1 ">
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className=" text-light">
                Recuerde que debe ser el mismo con el que se registró.
              </Form.Text>
              {errorEmail ? (
                <Alert variant="danger">Por favor ingresa tu email</Alert>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                name="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errorContraseña ? (
                <Alert variant="danger" className="mt-1">
                  Por favor ingresa tu contraseña
                </Alert>
              ) : (
                ""
              )}
              <Link to="/*" className="pt-2 mt-3 text-decoration-none">
                <small>Olvidé mi contraseña</small>
              </Link>
            </Form.Group>

            <Button variant="primary" type="submit">
              Ingresar
            </Button>

            <Link to="/register" className="px-3 text-decoration-none">
              ¿No tenes cuenta aún?
            </Link>
          </Form>
        </div>

        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </section>
    </div>
  );
};
