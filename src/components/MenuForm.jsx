import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MenuForm({ show, onHide, onSubmit, menu }) {
  const [nombre, setNombre] = useState('');
  const [detalle, setDetalle] = useState('');
  const [estado, setEstado] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    if (menu) {
      setNombre(menu.nombre);
      setDetalle(menu.detalle);
      setEstado(menu.estado);
      setPrecio(menu.precio);
      setCategoria(menu.categoria);
    } else {
      setNombre('');
      setDetalle('');
      setEstado('');
      setPrecio('');
      setCategoria('');
    }
  }, [menu]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMenu = {
      nombre,
      detalle,
      estado,
      precio,
      categoria,
    };
    onSubmit(newMenu);
  };
  

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{menu ? 'Editar Menú' : 'Agregar Menú'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="detalle">
            <Form.Label>Detalle</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el detalle"
              value={detalle}
              onChange={(event) => setDetalle(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="estado">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              as="select"
              value={estado}
              onChange={(event) => setEstado(event.target.value)}
            >
              <option value="">Seleccione una opción</option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="precio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingresa el precio"
              value={precio}
              onChange={(event) => setPrecio(event.target.value)}
            />
            </Form.Group>
          <Form.Group controlId="categoria">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"              
              value={categoria}
              onChange={(event) => setCategoria(event.target.value)}
              >
              <option value="">Seleccione una opción</option>
              <option value="categoria 1">categoria 1</option>
              <option value="categoria 2">categoria 2</option>
              <option value="categoria 3">categoria 3</option>
              <option value="categoria 4">categoria 4</option>
              </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MenuForm;