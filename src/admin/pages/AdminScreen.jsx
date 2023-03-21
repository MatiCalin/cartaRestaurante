import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import UsersTable from '../../components/UsersTable';
import FoodOrderTable from '../../components/FoodOrderTable';
import AdminMenu from "../../components/AdminMenu";
import './css/StylesAdm.css';

export const AdminScreen = () => {
  const [activeComponent, setActiveComponent] = useState('admin'); // estado inicial 'admin'

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="contenedor">
      <div className='contenedor-titulo-imagen'>
      <h1>Administracion</h1>
      <img 
        src="https://www.pngall.com/wp-content/uploads/12/Chef-PNG-Image-HD.png"
        alt=""
        className="imageAdm"
        ></img>
        </div>
<div className="button-container">
  <Button variant="primary" className="gradient-button" onClick={() => handleButtonClick('admin')}>Menus</Button>
  <Button variant="primary" className="gradient-button" onClick={() => handleButtonClick('users')}>Usuarios</Button>
  <Button variant="primary" className="gradient-button" onClick={() => handleButtonClick('food')}>Pedidos</Button>
</div>


      {activeComponent === 'admin' && <AdminMenu />}
      {activeComponent === 'users' && <UsersTable />}
      {activeComponent === 'food' && <FoodOrderTable />}
    </div>
  );
};

