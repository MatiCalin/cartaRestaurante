import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";

function UsersTable() {
  const [users, setUsers] = useState([
    { id: 1, name: "Juan", active: true },
    { id: 2, name: "Pedro", active: true },
    { id: 3, name: "Maria", active: false },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


  const handleToggleActive = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? { ...user, active: !user.active } : user
    );
    setUsers(updatedUsers);
    setShowModal(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="container mt-4">
      <h2>Usuarios</h2>
      <Table className="table-color td" bordered hover >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Button
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

