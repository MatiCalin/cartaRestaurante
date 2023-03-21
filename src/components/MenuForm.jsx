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
  const [imageUrl, setImageUrl] = useState('');
  const [menus, setMenus] = useState([]); // Estado para almacenar los menús

  useEffect(() => {
    if (menu) {
      setNombre(menu.nombre.trim());
      setDetalle(menu.detalle.trim());
      setEstado(menu.estado);
      setPrecio(menu.precio);
      setCategoria(menu.categoria);
      setImageUrl(menu.imageUrl.trim());
    } else {
      setNombre('');
      setDetalle('');
      setEstado('');
      setPrecio('');
      setCategoria('');
      setImageUrl('');
    }
  }, [menu]);

  function resetModal() {
    setNombre('');
    setDetalle('');
    setEstado('');
    setPrecio('');
    setCategoria('');
    setImageUrl('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.length > 16) {
      alert('El nombre no debe tener más de 16 caracteres');
      resetModal();
      return;
    }
    const detalleTrim = detalle.trim();
    if (detalle.length > 30) {
      alert('El detalle no debe tener más de 30 caracteres');
      resetModal();
      return;
    }
    if (!nombre || !detalle || !categoria || !estado || !imageUrl) {
      alert('Por favor completa todos los campos');
      resetModal();
      return;
    }
    const regex = /^\d{1,5}(\.\d{1,2})?$/;
    if (!regex.test(precio) || precio <= 0) {
      alert(
        'Por favor ingrese un precio válido mayor a 0 y con un máximo de 5 dígitos.'
      );
      resetModal();
      return;
    }

    const newMenu = {
      nombre,
      detalle,
      estado,
      precio,
      categoria,
      imageUrl,
    };

    // Verificar si el menú ya existe en la lista
    const menuExist = menus.find((menu) => menu.nombre === nombre && menu.detalle === detalle);
    if (menuExist) {
      alert('El menú ya existe en la lista');
      resetModal();
      return;
    }

    // Agregar el nuevo menú a la lista
    setMenus((prevMenus) => [...prevMenus, newMenu]);
    onSubmit(newMenu);
    resetModal();
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
          <Form.Group controlId="formImageUrl">
            <Form.Label>URL de imagen</Form.Label>
            <Form.Control type="text"
              placeholder="Ingrese la URL de la imagen"
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} />
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