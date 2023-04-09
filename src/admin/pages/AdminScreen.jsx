import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import UsersTable from '../../components/UsersTable';
import FoodOrderTable from '../../components/FoodOrderTable';
import AdminMenu from "../../components/AdminMenu";
import './css/StylesAdm.css';
import { NavbarC } from '../../ui/components/NavBar';
import { useEffect } from 'react';
import menuApi from '../../api/menuApi';
import { useNavigate } from 'react-router-dom';
import CategoriesTable from "../../components/CategoriesTable";


export const AdminScreen = () => {
  const [activeComponent, setActiveComponent] = useState('admin'); // estado inicial 'admin'
  const navigate = useNavigate();

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const verificarAdmin = async () => {
    try {
      const resp = await menuApi.get("admin/verificar");
      
      
      
      
    } catch (error) {
      if(error.response.status === 404){
        navigate("/404");
      }else if(error.response.status === 401){
        navigate("/")
      }
    }
    
  }

  useEffect(() => {
    verificarAdmin()
    
  }, [])
  

  return (
    <> 
    <NavbarC/>
    <div className="adminContainer">
      <div className='contenedor-titulo-imagen'>
      <h1>Administracion</h1>
      <img 
        src="https://www.pngall.com/wp-content/uploads/12/Chef-PNG-Image-HD.png"
        alt=""
        className="imageAdm"
        ></img>
        </div>
<div className="button-container">
  <Button variant="danger" className="gradient-button" onClick={() => handleButtonClick('admin')}>Menús</Button>
  <Button variant="danger" className="gradient-button" onClick={() => handleButtonClick('categories')}>Categorías</Button>
  <Button variant="danger" className="gradient-button" onClick={() => handleButtonClick('users')}>Usuarios</Button>
  <Button variant="danger" className="gradient-button" onClick={() => handleButtonClick('food')}>Pedidos</Button>
</div>


      {activeComponent === 'admin' && <AdminMenu />}
      {activeComponent === 'categories' && <CategoriesTable />}
      {activeComponent === 'users' && <UsersTable />}
      {activeComponent === 'food' && <FoodOrderTable />}
    </div>
        </>
  );
};

