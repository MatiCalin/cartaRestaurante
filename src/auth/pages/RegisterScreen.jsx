import React from "react";
import { useState, useEffect } from "react";
import "./css/registro.css";
import axios from "axios";
import menuApi from "../../api/menuApi";
import { useNavigate } from "react-router-dom";
import "./css/registro.css";
import Swal from "sweetalert";
import emailjs from "emailjs-com";

export const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("false");
  const [msgError, setMsgError] = useState("");
  const navigate = useNavigate();

  let templateParams = {
    from_name: "Fast Food Grill",
    user_name: `${name}`,
    destinatario: `${email}`,
    message:
      "Te has registrado correctamente a nuestra página. Ya puedes comenzar a utilizar nuestros servicios",
  };

  const sendRegister = async (name, email, password) => {
    try {
      const resp = await menuApi.post("/auth/new", {
        name,
        email,
        password,
      });

      Swal({
        position: "top-end",
        icon: "success",
        title: "Te has registrado correctamente",
        showConfirmButton: false,
        timer: 3000,
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch ({ response }) {}
  };

  const checkEmailExists = async (email) => {
    try {
      const response = await menuApi.get(`/auth/check-email/${email}`);
      return response.data.exists;
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    
    const emailExists = checkEmailExists(email);
    e.preventDefault();
    //validaciones

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !password) {
      setError(true);
      setMsgError("Todos los campos son obligatorios");
      setTimeout(() => {
        setError(false);
      }, 4000);
    } else if (!emailRegex.test(email)) {
      setError(true);
      setMsgError("El email ingresado no es valido");
      setTimeout(() => {
        setError(false);
      }, 4000);
    } else if (password.length < 5) {
      setError(true);
      setMsgError("La contraseña debe ser mayor a 5 caracteres");
      setTimeout(() => {
        setError(false);
      }, 4000);
    } else if (emailExists) {
      setError(true);
      setMsgError("El correo electronico ya está registrado");
      setTimeout(() => {
        setError(false);
      }, 4000);      
    } 
      sendRegister(name, email, password);

      
 

      //INICIO ENVIO DE MAIL REGISTRO EXITOSO

      emailjs.send(
          "service_l4kq8i7",
          "template_jdv3a5m",
          templateParams,
          "2Vzu_Q7zRYOuPjApY"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  
      //FIN ENVIO DE MAIL REGISTRO EXITOSO
    
    


  };

  return (
    <div className="register">
      <div className="container registerContainer">
        <form onSubmit={handleSubmit} className="registerFormback">
          <h1 className="registerTitle">Registro de usuario</h1>
          {error ? (
            <div className="errorStyle">
              <h3>{msgError}</h3>
            </div>
          ) : (
            ""
          )}

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

            <button className="my-2 fluid ui button blue registrobtn">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
