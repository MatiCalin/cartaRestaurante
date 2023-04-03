import React, { useState } from "react";
import MenuTable from './MenuTable'
import MenuForm from './MenuForm'
import CategoryForm from "./CategoryForm";

function AdminMenu () {
    const [menus, setMenus] = useState([]);
    const [categories, setCategories] = useState([]);

    // Define los estados para el Modal
    const [showModal, setShowModal] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);

    const [showModalCat, setShowModalCat] = useState(false);
    const [selectedCat, setSelectedCat] = useState(null);
    
    // Función para agregar un nuevo menú
    const handleAddMenu = (newMenu) => {
        setMenus(prevMenus => [...prevMenus, newMenu]);
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
    const handleDeleteMenu = () => {
    };

    // Función para agregar una nueva categoría
    const handleAddCat = (newCategory) => {
        setCategories(prevCategories => [...prevCategories, newCategory]);
        setShowModalCat(false);
    };

    // Función para actualizar una categoría existente
    const handleUpdateCat = (updatedCategory) => {
        const updatedCategories = categories.map((cat) =>
            cat.id === updatedCategory.id ? updatedCategory : cat
        );
        setCategories(updatedCategories);
        setShowModalCat(false);
    };
    
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

    // Función para editar una categoría
    const handleEditCat = (cat) => {
        setSelectedCat(cat);
        setShowModalCat(true);
    };

    // Función para cerrar el Modal Categoría
    const handleCloseModalCat = () => {
        setSelectedCat(null);
        setShowModalCat(false);
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

                <CategoryForm
                    showCat={showModalCat}
                    onHideCat={handleCloseModalCat}
                    onSubmitCat={selectedCat ? handleUpdateCat : handleAddCat}
                    category={selectedCat}
                />
                
                {/* Muestra la tabla de los menús */}
                <MenuTable
                    menus={menus}
                    categories={categories}
                    onDelete={handleDeleteMenu}
                    onEdit={handleEditMenu}
                    onEditCat={handleEditCat}
                />
            </div>
        </div>
    );
}

export default AdminMenu;
