import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import "./Pedido.css";
import Swal from "sweetalert";
import menuApi from "../api/menuApi";

const Pedido = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  setCountProducts,
}) => {
  const [numPedido, setNumPedido] = useState([]);

  const setPedido = () => {
    let numPed = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789";
    for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      numPed += str.charAt(char);
    }
    setNumPedido(numPed);
  };

  useEffect(() => (window.scrollTo(0, 0), setPedido()), []);

  const confirmarPedido = async () => {
    await menuApi
      .post("http://localhost:4003/admin/pedidoNew", {
        usuario: atob(localStorage.getItem("usr")),
        fecha: Date.now(),
        menus: allProducts.map((pedido) => ({
          _id: pedido._id,
          nombre: pedido.nombre,
          precio: pedido.precio,
          quantity: pedido.quantity,
        })),
        estado: "pendiente",
        codePedido: numPedido,
      })
      .then((res) => {
        if (res.data.ok) {
          Swal({
            title: "¡Pedido exitoso!",
            icon: "success",
            buttons: "OK!",
          }).then(() => {
            window.location = "/home";
          });
        }
      })
      .catch((res) => {
        Swal({
          title: "¡Oops!",
          text: "Surgió un error inesperado, por favor, contacte con el administrador del sitio",
          icon: "error",
          buttons: "OK!",
        }).then(() => {
          window.location = "/home";
        });
      });
  };

  // Reiniciar el carrito a valor cero
  const vaciarCarrito = () => {
    Swal({
      title: "¿Vaciar carrito?",
      text: "Esta acción limpiará todos los menús seleccionados",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Swal("¡Carrito limpio! carga nuevos menús :)", {
          icon: "success",
        });
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
      } else {
        Swal(
          "¡Tú carrito sigue intacto! puedes cargar más menús o confirma el pedido :)"
        );
      }
    });
  };
  return (
    <div className="container mb-5 verticalHeight">
      <Row xs={1} md={3} className="w-75" style={{ marginTop: "8rem" }}>
        <div className="w-100">
          {allProducts.length ? <h1>Pedido #{numPedido}</h1> : <h1>Pedido</h1>}
        </div>
      </Row>
      <Row xs={1} md={3} className="w-100 mt-3">
        <div className="w-100">
          <div className="table-responsive">
            <table className="table table-bordered table-striped ">
              <thead className="table-dark">
                {allProducts.length ? (
                  <tr>
                    <th>Menú</th>
                    <th className="text-center">Cantidad</th>
                    <th className="text-center">Precio</th>
                  </tr>
                ) : (
                  <tr>
                    <th colSpan="3" className="text-center">
                      Menús
                    </th>
                  </tr>
                )}
              </thead>
              <tbody>
                {allProducts.length ? (
                  allProducts.map((pedido) => (
                    <tr>
                      <td>{pedido.nombre}</td>
                      <td className="text-center">{pedido.quantity}</td>
                      <td className="text-center">
                        $ {pedido.precio * pedido.quantity}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colspan="3" className="text-center">
                      Sin pedidos :({" "}
                    </td>
                  </tr>
                )}
              </tbody>
              {allProducts.length ? (
                <tfoot className="table-dark">
                  <tr>
                    <td colSpan="2">Total a pagar</td>
                    <td className="text-center">$ {total}</td>
                  </tr>
                </tfoot>
              ) : (
                ""
              )}
            </table>
            <hr />
            {allProducts.length ? (
              <div className="btn-cart-event">
                <button
                  className="btn-confirmar-pedido"
                  onClick={() => confirmarPedido()}
                >
                  Confirmar pedido
                </button>
                <button
                  className="btn-clear-pedido"
                  onClick={() => vaciarCarrito()}
                >
                  Vaciar carrito
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Pedido;
