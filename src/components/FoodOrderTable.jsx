import React, {useEffect, useState} from "react";
import { Table, Button, Modal } from "react-bootstrap";
import menuApi from "../api/menuApi";
import {logDOM} from "@testing-library/react";

const FoodOrderTable = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  const cargarPedidos = async () => {
    try {
      const resp = await menuApi.get('/admin/pedidos');
      setOrders(resp.data.pedidos)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarPedidos();
  }, []);

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
      order._id === selectedOrder
        ? {
            ...order,
            estado: order.estado === "pendiente" ? "realizado" : "pendiente",
          }
        : order
    );
    setOrders(updatedOrders);
    handleCloseModal();
  };

  const handleDeleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order._id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div className="container mt-4 pb-5" style={{marginBottom: '150px'}}>
      <h2>Pedidos</h2>
      <Table className="table-color td" bordered hover>
        <thead>
          <tr>
            <th>Pedido #</th>
            <th>Menús</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td><span className="badge text-bg-dark">{order.codePedido}</span></td>
              <td>
                <ul>
                  {order.menus.map(pedido => (
                      <li key={pedido._id}>{pedido.nombre}</li>
                  ))}
                </ul>
              </td>
              <td>
                {order.menus.map(pedido => (
                    <li key={pedido._id}>{pedido.quantity}</li>
                ))}
              </td>
              <td>
                {order.menus.map(pedido => (
                    <li key={pedido._id}>$ {pedido.quantity * pedido.precio}</li>
                ))}
              </td>
              <td>{order.estado}</td>
              <td>
                <Button
                    className="btn btn-sm"
                    variant={order.estado === "pendiente" ? "success" : "warning"}
                    onClick={() => handleStatusChange(order._id)}
                >
                  {order.estado === "pendiente" ? "realizado" : "pendiente"}
                </Button>
                {' '}
                <Button
                    className="btn btn-sm"
                    variant="danger"
                    onClick={() => handleDeleteOrder(order._id)}>
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


