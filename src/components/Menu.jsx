import React, { useEffect, useState } from 'react'
import './Menu.css'
import { Button, Card, Row } from 'react-bootstrap';
import menuApi from "../api/menuApi";

const Menu = ({
    allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal
}) => {
    // Estados
    const [productos, setProductos] = useState([]);
    const [allProd, setAllProd] = useState([]);
    const [categorias, setCategorias] = useState([]);

    // Cargar Productos
    const getProductos = async () => {
        await menuApi.get("http://localhost:4003/admin/Menus")
            .then((respuesta) => {
                setProductos(respuesta.data.menus);
                setAllProd(respuesta.data.menus);
            })
    };

    // Cargar Categorías
    const getCategorias = async () => {
        await menuApi.get("http://localhost:4003/admin/Categorias")
            .then((respuesta) => {
                setCategorias(respuesta.data.categorias);
            })
    };

    useEffect(() => {
        getProductos();
        getCategorias();
    }, [])

    // Arreglo de categorías
    const AllProductTxt = 'Todos los productos';
    const allCategories = [AllProductTxt, ...new Set(categorias.map((category) => category.nombre))];

    // Filtro por categorías
    const filterCategory = (category) => {
        let filteredData = [];

        if (category === AllProductTxt) {
            filteredData = allProd;
        } else {
            filteredData = allProd.filter(productos => productos.categorias.nombre === category);
        }
        setProductos(filteredData);
    }

    // Agregar al carrito
    const agregarProducto = (menu) => {
        if (allProducts.find(item => item._id === menu._id)) {
            const products = allProducts.map(item =>
                item._id === menu._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + menu.precio * menu.quantity);
            setCountProducts(countProducts + menu.quantity);
            return setAllProducts([...products])
        }
        setTotal(total + menu.precio * menu.quantity);
        setCountProducts(countProducts + menu.quantity);
        setAllProducts([...allProducts, menu]);
    }

  return (
    <div className='cardtwo-container cardtwo-margin'>
<Row xs={1} sm={1} md={2} xl={4} className="g-4" style={{ margin: '3rem', paddingTop: '20px' }}>
            <div className="w-100">
                <h1>Productos</h1>
                <hr/>
                { allCategories.map(category => (
                    <button
                        type="button"
                        key={category}
                        onClick={ ()=>filterCategory(category)}
                        className="btn btn-dark me-3 my-3"
                    >
                        { category }
                    </button>
                ))}
            </div>

            {
                productos.map(menu => (
                    <div key={menu._id} className='container-card-food'>
                        <Card className='card-food border-light secondary' bg='dark'>
                            <Card.Img
                                className="cardimage flex-shrink-0 img-fluid rounded"
                                variant="top"
                                src={menu.imageUrl}
                            />
                            <Card.Body className='card-body'>
                                <Card.Title>{menu.nombre}</Card.Title>
                                <Card.Text> {menu.detalle} </Card.Text>
                                <Card.Text className='price-food'>
                                   $ {menu.precio}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                {

                                    menu.categorias.estado === 'activo'
                                        ? <Button variant="light" onClick={() => agregarProducto(menu)} >Añadir al carrito</Button>
                                        : <Button variant="light" disabled>Producto no disponible</Button>
                                }
                            </Card.Footer>
                        </Card>
                    </div>
                ))
            }
        </Row>
    </div>
  )
}

export default Menu