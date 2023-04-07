import React, {useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import menuApi from "../api/menuApi";

const CategoryForm = ({ show, onHide, onSubmit, category }) => {

    const [formValues, setFormValues] = useState({
        nombre: '',
        estado: ''
    });

    const handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, estado } = formValues;

        if (!nombre || !estado) {
            alert('Por favor completa todos los campos');
            return;
        }

        const newCategory = {
            nombre,
            estado
        }

        onSubmit(newCategory);
        setFormValues({
            nombre: '',
            estado: ''
        });

        if(category === null) {
            saveCategory(nombre, estado);
        } else {
            editCategory(nombre, estado, category)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const saveCategory = async (nombre, estado) => {
        try {
            await menuApi.post("/admin/categorias", {
                nombre,
                estado
            });

        } catch (error) {
            console.log(error);
        }
    };

    const editCategory = async (nombre, estado, _id) => {
        try {
            await menuApi.put("/admin/categorias", {
                nombre,
                estado,
                _id
            });

        } catch (error) {
            console.log(error)
        }
    }

    // Cargar menús por ID
    const getCategories = async () => {
        await menuApi.get("http://localhost:4003/admin/categorias")
            .then((respuesta) => {
                try {
                    const data = respuesta.data.categorias;
                    const resp = data.filter((cat) => cat._id === category);

                    setFormValues({
                        nombre: (category !== null ? resp[0].nombre : ''),
                        estado: (category !== null ? resp[0].estado : '')
                    });

                } catch(error) {
                    console.log(error)
                }
            })
    }

    useEffect(() => {
        getCategories();
    }, [category])

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{category ? 'Editar categoría' : 'Agregar categoría'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="nombre" className="mb-3">
                        <Form.Label>• Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa el nombre"
                            name="nombre"
                            value={formValues.nombre}
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

                    <div className="d-grid gap-2">
                        <Button variant="primary size='sm'" type="submit">
                            Guardar
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CategoryForm;
