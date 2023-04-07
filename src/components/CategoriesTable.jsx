import React, {useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import menuApi from "../api/menuApi";
import CategoryForm from "./CategoryForm";
import Swal from "sweetalert";

const CategoriesTable = () => {
    const [categories, setCategories] = useState([]);

    // Define los estados para el Modal
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleAddCategory = (newCategory) => {
        const newId = categories.length + 1;
        const updatedCategories = [...categories, { ...newCategory, id: newId }];
        setCategories(updatedCategories);
        setShowModal(false);
    };

    const handleAddCategoryShow = () => {
        setSelectedCategory(null);
        setShowModal(true);
    }

    const handleUpdateCategory = (_id, updatedCategory) => {
        const updatedCategories = categories.map((cat) =>
            (cat._id === _id) ? { ...updatedCategory, _id }: cat
        );
        setCategories(updatedCategories);
        setShowModal(false);
    };

    const handleEditCategory = (category) => {
        setSelectedCategory(category);
        setShowModal(true);
    }

    const handleDeleteCategory = async (id) => {
        try {
            await Swal({
                title: '¿Está seguro?',
                text: 'Una vez eliminado, ¡no podrá recuperar esta categoría!',
                icon: 'warning',
                buttons: ['Cancelar', 'Eliminar'],
                dangerMode: true,
            }).then(async (willDelete) => {
                if (willDelete) {
                    const respuesta = await menuApi.delete(`/admin/categoria/${id}`);
                    const updatedCategories = categories.filter((cat) => cat._id !== id);
                    setCategories(updatedCategories);

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
            setCategories(categories);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCloseModal = () => {
        setSelectedCategory(null);
        setShowModal(false);
    };

    // Cargar categorías
    const getCategories = async () => {
        try {
            const resp = await menuApi.get('/admin/categorias');
            setCategories(resp.data.categorias);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories();
    }, [categories]);

    return (
        <Container className="verticalHeight">
            <h2>Categorías</h2>
            <Button className="me-2" variant="primary" onClick={() => handleAddCategoryShow()}>
                Agregar Categoría
            </Button>
            <Row>
                <Col>
                    <Table bordered hover className="table-color">
                        <thead>
                        <tr>
                            <th className='col-md-9'>Nombre</th>
                            <th className='text-center col-md-1'>Estado</th>
                            <th className='text-center col-md-2'>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            categories.map((cat) => (
                                <tr key={cat._id + 1} className="text-bg-dark">
                                    <td>{cat.nombre}</td>
                                    <td className='text-center'>
                                        {cat.estado === 'activo'
                                            ? <span className='badge text-bg-success'>Activo</span>
                                            : <span className='badge text-bg-danger'>Inactivo</span>}
                                    </td>
                                    <td className='text-center'>
                                        <Button className="btn btn-sm" variant="primary" onClick={() => handleEditCategory(cat._id)}>
                                            Editar
                                        </Button>
                                        {' '}
                                        <Button className="btn btn-sm" variant="danger" onClick={() => handleDeleteCategory(cat._id)}>
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <CategoryForm
                show={showModal}
                onHide={handleCloseModal}
                onSubmit={selectedCategory ? handleUpdateCategory.bind(null, selectedCategory) : handleAddCategory}
                category={selectedCategory}
            />
        </Container>
    );
};

export default CategoriesTable;
