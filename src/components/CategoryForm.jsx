import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import menuApi from '../api/menuApi';

function CategoryForm({ showCat, onHideCat, onSubmitCat, category }) {
    const [formValues, setFormValues] = useState({
        nombre: '',
        estado: ''
    });

    const handleSubmitCat = (event) => {
        event.preventDefault();
        const { nombre, estado } = formValues;

        if (!nombre || !estado) {
            alert('Por favor completa todos los campos');
            return;
        }

        if (nombre.length > 16) {
            alert('El nombre no debe tener más de 16 caracteres');
            return;
        }

        const newCategory = {
            nombre,
            estado
        };

        onSubmitCat(newCategory);
        setFormValues({
            nombre: '',
            estado: ''
        });
        guardarCategoryDB(nombre, estado)
    };
    const handleChangeCat = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Guardar nueva categorío
    const guardarCategoryDB = async (nombre, estado) => {
        try {
            const resp = await menuApi.post("/admin/categoriaNew", {
                nombre,
                estado
            });
        } catch (error) {
            console.log("error")
        }
    };

    return (
        <Modal showCat={showCat} onHideCat={onHideCat}>
            <Modal.Header closeButton>
                <Modal.Title>{category ? 'Editar categoría' : 'Agregar categoría'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmitCat={handleSubmitCat}>
                    <Form.Group controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa el nombre"
                            name="nombre"
                            value={formValues.nombre}
                            onChange={handleChangeCat}
                        />
                    </Form.Group>
                    <Form.Group controlId="estado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            as="select"
                            name="estado"
                            value={formValues.estado}
                            onChange={handleChangeCat}
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
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

export default CategoryForm;