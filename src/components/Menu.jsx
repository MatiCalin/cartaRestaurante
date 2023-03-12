import React from 'react'
import './Menu.css'
import { productos } from '../data'
import { Button, Card, Col, Row } from 'react-bootstrap';

const Menu = ({
    allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal
}) => {

    const agregarProducto = (menu) => {
        if (allProducts.find(item => item.id === menu.id)) {
            const products = allProducts.map(item =>
				item.id === menu.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
            setTotal(total + menu.price * menu.quantity);
			setCountProducts(countProducts + menu.quantity);
            return setAllProducts([...products])
        }
        setTotal(total + menu.price * menu.quantity);
        setCountProducts(countProducts + menu.quantity);
        setAllProducts([...allProducts, menu]);
    }

  return (
    <div className='cardtwo-container'>
        <Row xs={1} md={3} className="g-4" style={{ margin: '5rem', paddingTop: '100px' }}>
        {
            productos.map(menu => (
                <Col key={menu.id}>
                <Card className='card-food border-light secondary' bg='dark'>
                <div className='offMenu'>
                {
                    menu.promotion 
                    ? `${ menu.off}%`
                    : ''
                }   
                </div>
                  <Card.Img className='cardimage flex-shrink-0 img-fluid rounded' variant="top" src= {menu.img}/>
                  <Card.Body className='card-body'>
                    <Card.Title>{menu.title}</Card.Title>
                    <Card.Text> {menu.description} </Card.Text>
                    <Card.Text>
                        {
                            menu.promotion 
                            ? `$${menu.price * menu.off / 100}`
                            : menu.price
                        }    
                    </Card.Text>
                    <Button variant="light"
                        onClick={() => agregarProducto(menu)}
                    >Añadir al carrito</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
        }
        </Row>
    </div>
  )
}

export default Menu