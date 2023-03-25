import React, { useState } from "react";
import MenuTable from './MenuTable'
import MenuForm from './MenuForm'



function AdminMenu () {
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

    export default AdminMenu;