import React, { useState } from "react";
import MenuTable from "./MenuTable";
import MenuForm from "./MenuForm";

function AdminMenu() {
  const [menus, setMenus] = useState([]);

  // Define los estados para el Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Función para agregar un nuevo menú
  const handleAddMenu = (newMenu) => {
    setMenus((prevMenus) => [...prevMenus, newMenu]);
    setShowModal(false);
  };

  // Función para actualizar un menú existente
  const handleUpdateMenu = (updatedMenu) => {
    const updatedMenus = menus.map((menu) =>
      menu.id === updatedMenu.id ? updatedMenu : menu
    );
    setMenus(updatedMenus);
    setShowModal(false);
  };

  // Función para eliminar un menú
  const handleDeleteMenu = () => {};

  // Función para editar un menú
  const handleEditMenu = (menu) => {
    setSelectedMenu(menu);
    setShowModal(true);
  };

  // Función para cerrar el Modal
  const handleCloseModal = () => {
    setSelectedMenu(null);
    setShowModal(false);
  };

  return (
    <div className="contenedor">
      <div className="table-responsive">
        {/* Muestra el formulario de los menús */}
        <MenuForm
          show={showModal}
          onHide={handleCloseModal}
          onSubmit={selectedMenu ? handleUpdateMenu : handleAddMenu}
          menu={selectedMenu}
        />

        {/* Muestra la tabla de los menús */}
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
