import React from "react";
import { useState, useEffect } from "react";
import "./css/registro.css";
import axios from "axios";
import menuApi from "../../api/menuApi";
import { useNavigate } from "react-router-dom";
import "./css/registro.css";

export const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("false");
  const [msgError, setMsgError] = useState("");
  const navigate = useNavigate();

  const sendRegister = async (name, email, password) => {
    try {
      const resp = await menuApi.post("/auth/new", {
        name,
        email,
        password,
      });

      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch ({ response }) {}
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //validaciones

  // if (!name || !email || !password) {
  //   setError(true);
  //   setMsgError("Todos los campos son obligatorios")
  //   setTimeout(() => {
  //     setError(false);
  //   }, 4000);
  // } else if (email.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/)) {
  //   setError(true);
  //   setMsgError("El email ingresado no es valido")
  //   setTimeout(() => {
  //     setError(false);
  //   }, 4000);
  // }

  sendRegister(name, email, password);

  return (
    <div className="register">
      <div className="container registerContainer">
        <form onSubmit={handleSubmit} className="registerFormback">
          <h1 className="registerTitle">Registro de usuario</h1>
          {/* {{error ? <div className="errorStyle"><h3 >{msgError}</h3></div> : ""} } */}

          <div className="ui form registerForm">
            <div className="field py-2 formField">
              <label className="px-2 formLabel">Nombre de Usuario</label>
              <input
                type="text"
                name="username"
                placeholder="Nombre Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field py-2 formField">
              <label className="px-2 formLabel">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field py-2 formField">
              <label className="px-2 formLabel">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <p>{formErrors.password}</p> */}

            <button className="my-2 fluid ui button blue registrobtn">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
