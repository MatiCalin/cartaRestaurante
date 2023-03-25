import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";

function FoodOrderTable() {
  const [orders, setOrders] = useState([
    { id: 1, name: "Pizza", status: "Pendiente" },
    { id: 2, name: "Hamburguesa", status: "Realizado" },
    { id: 3, name: "Ensalada", status: "Pendiente" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleStatusChange = (id) => {
    setSelectedOrder(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  const handleConfirmStatusChange = () => {
    const updatedOrders = orders.map((order) =>
      order.id === selectedOrder
        ? {
            ...order,
            status: order.status === "Pendiente" ? "Realizado" : "Pendiente",
          }
        : order
    );
    setOrders(updatedOrders);
    handleCloseModal();
  };

  const handleDeleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div className="container mt-4">
      <h2>Pedidos</h2>
      <Table className="table-color td" bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Comida</th>
            <th>Estado</th>
            <th>Acciones</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.status}</td>
              <td>
                <Button
                  variant={order.status === "Pendiente" ? "success" : "warning"}
                  onClick={() => handleStatusChange(order.id)}
                >
                  {order.status === "Pendiente" ? "Realizado" : "Pendiente"}
                </Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteOrder(order.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cambiar estado del pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro de que desea cambiar el estado del pedido seleccionado?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirmStatusChange}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FoodOrderTable;


