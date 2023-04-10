import React, {useEffect, useState} from "react";
import { Table, Button, Modal } from "react-bootstrap";
import menuApi from "../api/menuApi";
import Swal from "sweetalert";

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
  }, [orders]);

  const handleStatusChange = (id) => {
    setSelectedOrder(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  const handleConfirmStatusChange = async () => {
    const updatedOrders = orders.map((order) =>
      order._id === selectedOrder
        ? {
            ...order,
            estado: order.estado === "pendiente" ? "realizado" : "pendiente",
          }
        : order
    );
    setOrders(updatedOrders);
    editOrder(updatedOrders, selectedOrder)
    handleCloseModal();
  };

  const editOrder = async (order, _id) => {
    try {
      const orderFilter = await order.filter((order) => order._id === _id);

      await menuApi.put("/admin/pedidos", {
        orderFilter,
        _id
      });
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleDeleteOrder = async (id) => {
    try {
      await Swal({
        title: '¿Está seguro?',
        text: 'Una vez eliminado, ¡no podrá recuperar esta categoría!',
        icon: 'warning',
        buttons: ['Cancelar', 'Eliminar'],
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          const respuesta = await menuApi.delete(`/admin/pedido/${id}`);
          const updatedOrders = orders.filter((order) => order._id !== id);
          setOrders(updatedOrders);

          if(!respuesta.data.ok) {
            await Swal( {
              title: respuesta.data.msg,
              icon: 'error',
            });
            return;
          }
          await Swal( {
            title: respuesta.data.msg,
            icon: 'success',
          });
        } else {
          await Swal( {
            title: '¡La eliminación ha sido cancelada!',
            icon: 'error',
          });
        }
      });
      setOrders(orders);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-4 pb-5 ">
      <h2>Pedidos</h2>
      <Table className="table-color td" bordered hover responsive>
        <thead>
          <tr>
            <th className="text-center col-md-1">Pedido</th>
            <th className="col-md-4">Menús</th>
            <th className="text-center col-md-1">Fecha</th>
            <th className="text-center col-md-1">Cantidad</th>
            <th className="text-center col-md-1">Precio</th>
            <th className="text-center col-md-1">Usuario</th>
            <th className="text-center col-md-1">Estado</th>
            <th className="text-center col-md-2">Acciones</th>
          </tr>
        </thead>
        <tbody>

        { orders.length === 0 &&
          <tr>
            <td colSpan="8" className="text-center text-bg-dark">Sin pedidos</td>
          </tr>
        }
          {orders.map((order) => (
            <tr key={order._id} className="text-bg-dark">
              <td className="text-center">
                <span className="badge">
                  {order.codePedido}
                </span>
              </td>
              <td>
                <ul className="list-unstyled pt-3">
                  {order.menus.map(pedido => (
                      <li key={pedido._id}>
                        » {pedido.nombre}
                      </li>
                  ))}
                </ul>
              </td>
              <td className="text-center">
                <span className="badge bg-light text-dark p-2">
                  {new Date(order.fecha).toLocaleDateString('es-AR')}
                </span>
              </td>
              <td className="text-center">
                <ul className="list-unstyled pt-3">
                  {order.menus.map(pedido => (
                      <li key={pedido._id}>
                        {pedido.quantity}
                      </li>
                  ))}
                </ul>
              </td>
              <td className="text-center">
                <ul className="list-unstyled pt-3">
                  {order.menus.map(pedido => (
                      <li key={pedido._id}>$ {pedido.quantity * pedido.precio}</li>
                  ))}
                </ul>
              </td>
              <td className="text-center">
                <span className="badge bg-light text-dark p-2" title={order.usuario.email}>
                  {order.usuario.name}
                </span>
              </td>
              <td
                  className={order.estado === 'pendiente'
                      ? "bg-danger text-white text-center"
                      : "bg-success text-white text-center"}
              >
                {order.estado === "pendiente" ? "Pendiente" : "Realizado"}
              </td>
              <td className="text-center">
                <Button
                    className="btn btn-sm"
                    variant={order.estado === "pendiente" ? "primary" : "warning"}
                    onClick={() => handleStatusChange(order._id)}
                >
                  {order.estado === "pendiente" ? "Realizado" : "Pendiente"}
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
          <Button
              variant="secondary"
              onClick={handleCloseModal}
          >
            Cancelar
          </Button>
          <Button
              variant="primary"
              onClick={handleConfirmStatusChange}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FoodOrderTable;


