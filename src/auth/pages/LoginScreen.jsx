import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./css/login.css"

export const LoginScreen = () => {
  return (
    <div className="">
      <div className="text-center">
      <h1 className=" mt-3 py-2">¡Bienvenidos comensales!</h1>
      <img
        src="https://marketplace.canva.com/EAFDw2DA9TU/1/0/1131w/canva-men%C3%BA-carta-restaurante-japon%C3%A9s-formas-org%C3%A1nicas-txbBFK-dh8Q.jpg"
        alt=""
        className="w-25 h-25"
      />
      </div>
      
    <div className="d-flex align-items-center justify-content-center mt-3">
    <Form className="px-3 my-1 formulario-login">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" required/>
          <Form.Text className="text-muted">
            Recuerde que debe ser el mismo con el que se registró.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" required/>
          <Link to="" className="pt-2 mt-3 text-decoration-none"><small>Olvidé mi contraseña</small></Link>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check" required/>
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
