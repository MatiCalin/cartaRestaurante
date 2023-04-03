import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import menuApi from '../api/menuApi';

function MenuForm({ show, onHide, onSubmit, menu }) {
  const [formValues, setFormValues] = useState({
    nombre: '',
    detalle: '',
    estado: '',
    precio: '',
    categorias: '',
    imageUrl: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, detalle, estado, precio, categorias, imageUrl } = formValues;

    if (!nombre || !detalle || !estado || !precio || !categorias || !imageUrl ) {
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
      categorias,
      imageUrl
    };

    onSubmit(newMenu);
    setFormValues({
      nombre: '',
      detalle: '',
      estado: '',
      precio: '',
      categorias: '',
      imageUrl: ''
    });
    guardarMenusDB (nombre, detalle, estado, precio, categorias, imageUrl)
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
// mandar menus al DB
  const guardarMenusDB = async (nombre, detalle, estado, precio, categorias, imageUrl) => {
    try {
          const resp = await menuApi.post("/admin/new", {
            nombre,
            detalle,
            estado,
            precio,
            categorias,
            imageUrl
          });
    } catch (error) {
      console.log("error")
    
    }
  };
  const [categorias, setCategorias] = useState([]);

  // Cargar Categorías
  const getCategorias = async () => {
    await menuApi.get("http://localhost:4003/admin/Categorias")
        .then((respuesta) => {
          setCategorias(respuesta.data.categorias);
        })
  };

  useEffect(() => {
    getCategorias();
  }, [])

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
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
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
              name="categorias"
              value={formValues.categoria}
              onChange={handleChange}>
              <option value="">Seleccione una opción</option>
                {categorias.map((categoria) => (
                  <option key={categoria._id} value={categoria._id}>
                {categoria.nombre}
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