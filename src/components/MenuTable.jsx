import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MenuForm from './MenuForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function MenuTable() {
  const [menus, setMenus] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  

  const handleAddMenu = (newMenu) => {
    const newId = menus.length + 1;
    const updatedMenus = [...menus, { ...newMenu, id: newId }];
    setMenus(updatedMenus);
    setShowModal(false);
  };

  const handleUpdateMenu = (id, updatedMenu) => {
    const updatedMenus = menus.map((menu) =>
      menu.id === id ? { ...updatedMenu, id } : menu
    );
    setMenus(updatedMenus);
    setShowModal(false);
  };

  const handleDeleteMenu = (id) => {
    const updatedMenus = menus.filter((menu) => menu.id !== id);
    setMenus(updatedMenus);
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
    <Container>
      <h2>Menús</h2>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Agregar Menú
      </Button>
      <Row>
        <Col>
          <Table bordered hover className="table-color">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Detalle</th>
                <th>Estado</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu) => (
                <tr key={menu.id}>
                  <td>{menu.id}</td>
                  <td>{menu.nombre}</td>
                  <td>{menu.detalle}</td>
                  <td>{menu.estado}</td>
                  <td>{menu.precio}</td>
                  <td>{menu.categoria}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleEditMenu(menu)}>
                      Editar
                    </Button>
                    {' '}
                    <Button variant="danger" onClick={() => handleDeleteMenu(menu.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <MenuForm
        show={showModal}
        onHide={handleCloseModal}
        onSubmit={selectedMenu ? handleUpdateMenu.bind(null, selectedMenu.id) : handleAddMenu}
        menu={selectedMenu}
      />
    </Container>
  );
}

export default MenuTable;
