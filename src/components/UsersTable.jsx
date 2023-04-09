import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import menuApi from "../api/menuApi";
import { useEffect } from 'react';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


  const handleToggleActive = async (user) => {
    const updatedUser = { ...user, active: !user.active };
    setSelectedUser(updatedUser);
    setShowModal(true);
    console.log(updatedUser);
  };
  const updateUser = async (updatedUser) => {
    try {
      await menuApi.put(`/admin/Usuarios/${updatedUser._id}`, updatedUser);
      cargarUser(); // carga los usuarios actualizados desde la base de datos
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalConfirm = async () => {
    try {
      await updateUser(selectedUser); // llama a updateUser con el usuario seleccionado
      setShowModal(false); // cierra el modal después de que la actualización sea exitosa
    } catch (error) {
      console.log(error);
    }
  };


  const handleModalClose = () => {
    setShowModal(false);
    setSelectedUser(null);
  };


  // Mandar usuarios a DB  
  const cargarUser = async() => {
    try {
      const resp = await menuApi.get ("/admin/Usuarios");
      setUsers(resp.data.Usuarios);
    } catch (error) {
      console.log(error)
    };
  };
  
  useEffect(() => {
    cargarUser ();
  }, []);                 


  return (
    <div className="container mt-4 pb-5 verticalHeight">
      <h2>Usuarios</h2>
      <Table className="table-color td" bordered hover >
        <thead>
          <tr>
            <th>ID</th>
            <th className="text-center">Nombre</th>
            <th>Email</th>
            <th className="text-center">Estado</th>
          </tr>
        </thead>
          
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="text-bg-dark">
              <td>
                <span className="badge">
                  {user._id}
                </span>
              </td>
              <td className="text-center">{user.name}</td>
              <td>{user.email}</td>
              <td className="text-center">
                <Button
                    className="btn btn-sm"
                  variant={user.active ? "success" : "danger"}
                  onClick={() => handleToggleActive(user)}
                >
                  {user.active ? "Activo" : "Inactivo"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar acción</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro que desea cambiar el estado para el usuario "{selectedUser?.name}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleModalConfirm}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UsersTable;
