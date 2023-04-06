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

  const sendRegister = async(name, email, password) => {
    try {
      const resp = await menuApi.post("/auth/new", {
        name,
        email,
        password,
      });
      
      setTimeout(() => {
        navigate("/home");
      }, 3000);
      
    } catch ({response}) {
      
    }
  }
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
    
    <div className="container registerContainer">
      <form onSubmit={handleSubmit}>
        <h1>Registro de usuario</h1>
        {/* {{error ? <div className="errorStyle"><h3 >{msgError}</h3></div> : ""} } */}
         <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Nombre de Usuario</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>
          
          <div className="field">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </div>
          {/* <p>{formErrors.password}</p> */}
          
          <button className="fluid ui button blue registrobtn">Submit</button>
        </div>
      </form>
    </div>
    
  );
   }; 
 