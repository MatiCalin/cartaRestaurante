import React, {useState, useEffect} from 'react';
import {Button, Card, Row} from "react-bootstrap";
import './Pedido.css';

const Pedido = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal
}) => {

    const [numPedido, setNumPedido] = useState([]);

    const setPedido = () => {
        let numPed = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';
        for (let i = 1; i <= 8; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            numPed += str.charAt(char)
        }
        setNumPedido(numPed);
    }

    useEffect(() => (
        setPedido()
    ), []);


    return (
        <div className='container'>
            <Row xs={1} md={3} className="w-75" style={{ marginTop: '8rem' }}>
                <div className="w-100">
                    {
                        allProducts.length ?
                            <h1>Pedido #{numPedido}</h1>
                            :
                            <h1>Pedido</h1>
                    }
                </div>
            </Row>
            <Row xs={1} md={3} className="w-100 mt-3">
                <div className="w-100">
                      <div className="table-responsive">
                          <table className="table table-bordered table-striped ">
                              <thead className="table-dark">
                                  <tr>
                                      <th>Producto</th>
                                      <th className="text-center">Cantidad</th>
                                      <th className="text-center">Precio</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {
                                  allProducts.length ?
                                      allProducts.map(pedido => (
                                          <tr>
                                              <td>{pedido.nombre}</td>
                                              <td className="text-center">{pedido.quantity}</td>
                                              <td className="text-center">$ {pedido.precio * pedido.quantity}</td>
                                          </tr>
                                      ))
                                      :
                                      <tr>
                                          <td colspan="3" className="text-center">Sin pedidos</td>
                                      </tr>
                              }

                              </tbody>
                              <tfoot className="table-dark">
                              <tr>
                                  <td colspan="2">Total a pagar</td>
                                  <td className="text-center">$ {total}</td>
                              </tr>
                              </tfoot>
                          </table>
                          <hr/>
                          {
                              allProducts.length ?
                                  <div>
                                      <button
                                          className="btn-confirmar-pedido"
                                      >
                                          Confirmar pedido
                                      </button>
                                  </div>
                                  : ''
                          }

                      </div>
                </div>
            </Row>
        </div>
    );
};

export default Pedido;
