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

  const handleAddMenuShow = () => {
    setSelectedMenu(null);
    setShowModal(true);
  }

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
  }, [menus]);
  return (
    <Container className="verticalHeight">
      <h2>Menús</h2>
      <Button className="me-2" variant="primary" onClick={() => handleAddMenuShow()}>
        Agregar Menú
      </Button>
      <Row>
        <Col>
          <Table bordered hover className="table-color" responsive>
            <thead>
              <tr>
                <th className='col-md-2'>Nombre</th>
                <th className='col-md-5'>Detalle</th>
                <th className='text-center col-md-1'>Estado</th>
                <th className='text-center col-md-1'>Precio</th>
                <th className='text-center col-md-1'>Categoría</th>
                <th className='text-center col-md-2'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu) => (
                <tr key={menu._id + 1} className="text-bg-dark">
                  <td>{menu.nombre}</td>
                  <td>{menu.detalle}</td>
                  <td className='text-center'>{menu.estado === 'activo' ? <span className='badge text-bg-success'>Activo</span> : <span className='badge text-bg-danger'>Inactivo</span>}</td>
                  <td className='text-center'>$ {menu.precio}</td>
                  <td className='text-center'>
                    <span className='badge bg-light text-black p-2'>
                      {menu.categorias.nombre}
                    </span>
                  </td>
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
