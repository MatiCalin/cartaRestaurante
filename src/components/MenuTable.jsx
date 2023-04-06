import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MenuForm from './MenuForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import menuApi from '../api/menuApi';
import Swal from 'sweetalert';

function MenuTable() {
  const [menus, setMenus] = useState([]);

  // Define los estados para el Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleAddMenu = (newMenu) => {
    const newId = menus.length + 1;
    const updatedMenus = [...menus, { ...newMenu, id: newId }];
    setMenus(updatedMenus);
    setShowModal(false);
  };

  const handleUpdateMenu = (_id, updatedMenu) => {
    const updatedMenus = menus.map((menu) =>
        (menu._id === _id) ? { ...updatedMenu, _id } : menu
    );
    setMenus(updatedMenus);
    setShowModal(false);
  };

  const handleDeleteMenu = async(id) => {
    try {
      await Swal({
        title: '¿Está seguro?',
        text: 'Una vez eliminado, ¡no podrá recuperar este menú!',
        icon: 'warning',
        buttons: ['Cancelar', 'Eliminar'],
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          const resp = await menuApi.delete(`/admin/eliminar/${id}`);
          const updatedMenus = menus.filter((menu) => menu._id !== id);
          setMenus(updatedMenus);
          await Swal('¡El menú ha sido eliminado!', {
            icon: 'success',
          });
        } else {
          await Swal('¡La eliminación ha sido cancelada!', {
            icon: 'error',
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditMenu = (menu) => {
    setSelectedMenu(menu);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMenu(null);
    setShowModal(false);
  };

  const cargarMenus = async () => {
    try {
      const resp = await menuApi.get('/admin/Menus');
      setMenus(resp.data.menus)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarMenus();
  }, []);
  return (
    <Container style={{marginBottom: '150px'}}>
      <h2>Menús</h2>
      <Button className="me-2" variant="primary" onClick={() => setShowModal(true)}>
        Agregar Menú
      </Button>
      <Row>
        <Col>
          <Table bordered hover className="table-color">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Detalle</th>
                <th className='text-center'>Estado</th>
                <th style={{minWidth: '120px', textAlign: 'center'}}>Precio</th>
                <th className='text-center'>Categoría</th>
                <th style={{minWidth: '150px', textAlign: 'center'}}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu) => (
                <tr key={menu._id}>
                  <td>{menu.nombre}</td>
                  <td>{menu.detalle}</td>
                  <td className='text-center'>{menu.estado === 'activo' ? <span className='badge text-bg-success'>Activo</span> : <span className='badge text-bg-danger'>Inactivo</span>}</td>
                  <td className='text-center'>$ {menu.precio}</td>
                  <td className='text-center'>{menu.categorias.nombre}</td>
                  <td className='text-center'>
                    <Button className="btn btn-sm" variant="primary" onClick={() => handleEditMenu(menu._id)}>
                      Editar
                    </Button>
                    {' '}
                    <Button className="btn btn-sm" variant="danger" onClick={() => handleDeleteMenu(menu._id)}>
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
        onSubmit={selectedMenu ? handleUpdateMenu.bind(null, selectedMenu) : handleAddMenu}
        menu={selectedMenu}
      />
    </Container>
  );
}

export default MenuTable;
