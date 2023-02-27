import React, { useState } from "react";
import MenuTable from "../../components/MenuTable";
import MenuForm from "../../components/MenuForm";
import './css/StylesAdm.css'

export const AdminScreen = () => {
    const [menus, setMenus] = useState([]);
    
      const [showModal, setShowModal] = useState(false);
      const [selectedMenu, setSelectedMenu] = useState(null);
    
      const handleAddMenu = (newMenu) => {
        setMenus([...menus, newMenu]);
        setShowModal(false);
      };
    
      const handleUpdateMenu = (updatedMenu) => {
        const updatedMenus = menus.map((menu) =>
          menu.id === updatedMenu.id ? updatedMenu : menu
        );
        setMenus(updatedMenus);
        setShowModal(false);
      };
    
      const handleDeleteMenu = (id) => {
        const filteredMenus = menus.filter((menu) => menu.id !== id);
        setMenus(filteredMenus);
      };
    
      const handleEditMenu = (menu) => {
        setSelectedMenu(menu);
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setSelectedMenu(null);
        setShowModal(false);
      };
    
      return (
        <div className="contenedor">
          <h1>Administra tus Menus</h1>
          <img 
          src="https://www.pngall.com/wp-content/uploads/12/Chef-PNG-Image-HD.png"
          alt=""
          className="imageAdm"></img>
          <div className="table-responsive">

          <MenuForm
            show={showModal}
            onHide={handleCloseModal}
            onSubmit={selectedMenu ? handleUpdateMenu : handleAddMenu}
            menu={selectedMenu}
            />
          <MenuTable
            menus={menus}
            onDelete={handleDeleteMenu}
            onEdit={handleEditMenu}
            />
            </div>
          
        </div>
      );
    }