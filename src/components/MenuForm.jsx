import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import menuApi from '../api/menuApi';

const CATEGORIAS = [
  'categoria 1',
  'categoria 2',
  'categoria 3',
  'categoria 4'
];

function MenuForm({ show, onHide, onSubmit, menu }) {
  const [formValues, setFormValues] = useState({
    nombre: '',
    detalle: '',
    estado: '',
    precio: '',
    categoria: '',
    imageUrl: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, detalle, categoria, estado, imageUrl, precio } = formValues;

    if (!nombre || !detalle || !categoria || !estado || !imageUrl || !precio) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (nombre.length > 16) {
      alert('El nombre no debe tener más de 16 caracteres');
      return;
    }

    if (detalle.length > 30) {
      alert('El detalle no debe tener más de 30 caracteres');
      return;
    }

    const regex = /^\d{1,5}(\.\d{1,2})?$/;
    if (!regex.test(precio) || precio <= 0) {
      alert(
        'Por favor ingrese un precio válido mayor a 0 y con un máximo de 5 dígitos.'
      );
      return;
    }

    const newMenu = {
      nombre,
      detalle,
      estado,
      precio,
      categoria,
      imageUrl
    };

    onSubmit(newMenu);
    setFormValues({
      nombre: '',
      detalle: '',
      estado: '',
      precio: '',
      categoria: '',
      imageUrl: ''
    });
    guardarMenusDB (nombre, detalle, estado, precio, categoria, imageUrl)
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
// mandar menus al DB
  const guardarMenusDB = async (nombre, detalle, estado, precio, categoria, imageUrl) => {
    try {
          const resp = await menuApi.post("/admin/new", {
            nombre,
            detalle,
            estado,
            precio,
            categoria,
            imageUrl,
          });
          console.log(resp)
    } catch (error) {
      console.log("error")
    
    }
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
              name="nombre"
              value={formValues.nombre}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="detalle">
            <Form.Label>Detalle</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el detalle"
              name="detalle"
              value={formValues.detalle}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="estado">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              as="select"
              name="estado"
              value={formValues.estado}
              onChange={handleChange}
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
              name="precio"
              value={formValues.precio}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="categoria">
            <Form.Label>Categoría</Form.Label>
              <Form.Control
              as="select"    
              name="categoria"          
              value={formValues.categoria}
              onChange={handleChange}>
                <option value="">Seleccione una opción</option>
                  {CATEGORIAS.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
            ))}
          </Form.Control>
        </Form.Group>

          <Form.Group controlId="formImageUrl">
            <Form.Label>URL de imagen</Form.Label>
            <Form.Control type="text"
              placeholder="Ingrese la URL de la imagen"
              name="imageUrl"
              value={formValues.imageUrl} 
              onChange={handleChange} />
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