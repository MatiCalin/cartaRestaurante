import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./css/login.css";
import Alert from "react-bootstrap/Alert";

export const LoginScreen = () => {
  const [userLog, setUserLog] = useState({
    email: "",
    contraseña: "",
  });

  const navigate = useNavigate();

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorContraseña, setErrorContraseña] = useState(false);

  const inputChange = (e) => {
    setUserLog({
      ...userLog,
      [e.target.name]: e.target.value,
    });
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    if (userLog.email.trim() === "") {
      setErrorEmail(true);
      setTimeout(() => {
        setErrorEmail(false);
      }, 4000);
    } else if (userLog.contraseña.trim() === "") {
      setErrorContraseña(true);
      setTimeout(() => {
        setErrorContraseña(false);
      }, 4000);
    } else if (userLog.email.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/)) {
      navigate("/menu");
    }
  };

  return (
    <div className="">
      <div className="text-center">
        <h1 className=" mt-3 py-2">¡Bienvenidos comensales!</h1>
      </div>

      <div className="d-flex align-items-center justify-content-center mt-3 formulario-login">
        <img
          src="https://marketplace.canva.com/EAFDw2DA9TU/1/0/1131w/canva-men%C3%BA-carta-restaurante-japon%C3%A9s-formas-org%C3%A1nicas-txbBFK-dh8Q.jpg"
          alt=""
          className="w-25 h-25"
        />
        <Form onSubmit={onLoginSubmit} className="px-3 my-1 ">
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              name="email"
              value={userLog.email}
              onChange={inputChange}
            />
            <Form.Text className="text-muted">
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
              value={userLog.contraseña}
              onChange={inputChange}
              // required
            />
            {errorContraseña ? (
              <Alert variant="danger">Por favor ingresa tu contraseña</Alert>
            ) : (
              ""
            )}
            <Link to="" className="pt-2 mt-3 text-decoration-none">
              <small>Olvidé mi contraseña</small>
            </Link>
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
          <Link to="/register" className="px-3 text-decoration-none">
            ¿No tenes cuenta aún?
          </Link>
        </Form>
      </div>
    </div>
  );
};
