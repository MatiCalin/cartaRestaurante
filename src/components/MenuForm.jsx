import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import menuApi from '../api/menuApi';

const MenuForm = ({ show, onHide, onSubmit, menu }) => {

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

    if (detalle.length > 93) {
      alert('El detalle no debe tener más de 93 caracteres');
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

    if(menu === null) {
      guardarMenusDB(nombre, detalle, estado, precio, categorias, imageUrl)
    } else {
      modificarMenusDB(nombre, detalle, estado, precio, categorias, imageUrl, menu)
    }

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
  // modificar menus al DB
  const modificarMenusDB = async (nombre, detalle, estado, precio, categorias, imageUrl, _id) => {
    try {
      const resp = await menuApi.put("/admin/editar", {
        nombre,
        detalle,
        estado,
        precio,
        categorias,
        imageUrl,
        _id
      });

    } catch (error) {
      console.log("error")
    }
  };
  const [categorias, setCategorias] = useState([]);

  // Cargar menús por ID
  const getProducts = async () => {
    await menuApi.get("http://localhost:4003/admin/menus")
        .then((respuesta) => {
         try {
            const data = respuesta.data.menus;
            const resp = data.filter((prod) => prod._id === menu);

            setFormValues({
              nombre: (menu !== null ? resp[0].nombre : ''),
              detalle: (menu !== null ? resp[0].detalle : ''),
              estado: (menu !== null ? resp[0].estado : ''),
              precio: (menu !== null ? resp[0].precio : ''),
              categorias: (menu !== null ? resp[0].categorias : ''),
              imageUrl: (menu !== null ? resp[0].imageUrl : '')
            });

         } catch (error) {
           console.log(error)
         }
        })
  }

  // Cargar Categorías
  const getCategorias = async () => {
    await menuApi.get("http://localhost:4003/admin/Categorias")
        .then((respuesta) => {
          setCategorias(respuesta.data.categorias);
        })
  };

  useEffect(() => {
    getProducts()
    getCategorias();
  }, [menu])

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{menu ? 'Editar Menú' : 'Agregar Menú'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre" className="mb-3">
            <Form.Label>• Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre"
              name="nombre"
              maxLength="16"
              value={formValues.nombre}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="detalle" className="mb-3">
            <Form.Label>• Detalle</Form.Label>
            <Form.Control
                as="textarea"
                rows="2"
                placeholder="Ingresa el detalle"
                name="detalle"
                maxLength="93"
                value={formValues.detalle}
                onChange={handleChange}
            />

          </Form.Group>
          <Form.Group controlId="estado" className="mb-3">
            <Form.Label>• Estado</Form.Label>
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
          <Form.Group controlId="precio" className="mb-3">
            <Form.Label>• Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingresa el precio"
              name="precio"
              value={formValues.precio}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="categoria" className="mb-3">
            <Form.Label>• Categoría</Form.Label>
              <Form.Control
              as="select"
              name="categorias"
              value={formValues.categorias._id}
              onChange={handleChange}>
              <option value="">Seleccione una opción</option>
                {categorias.map((categoria) => (
                    <option
                        key={categoria._id}
                        value={categoria._id}
                    >
                      {categoria.nombre}
                    </option>
                ))}
          </Form.Control>
        </Form.Group>

          <Form.Group controlId="formImageUrl" className="mb-3">
            <Form.Label>• URL de imagen</Form.Label>
            <Form.Control type="text"
              placeholder="Ingrese la URL de la imagen"
              name="imageUrl"
              value={formValues.imageUrl}
              onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <img src={formValues.imageUrl} alt={formValues.nombre} className="img-thumbnail" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary size='sm'" type="submit">
              Guardar
            </Button>
          </div>

        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MenuForm;