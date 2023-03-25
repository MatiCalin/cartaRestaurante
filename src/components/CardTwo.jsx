import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import  { productos } from '../data';


export const CardTwo = ({
  allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal
}) => {
    
    return(
        <>
        <div className='CardTwo-Lines'>
            <h2 className='lines-effect' > PROMOCIONES DEL MES </h2>
        </div>

        <div >
          <Row xs={1} md={3} className="g-4" style={{ margin: '5rem' }}>
          {
            productos.map(menu => (
                <Col key={menu.id}>
                  {
                    menu.promotion 
                    ? (
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
                        onClick={() => window.location='menu'}>
                          Ir a menú
                        </Button>
                      </Card.Body>
                    </Card>
                    )
                    : ''
                } 
                
              </Col>
            ))
        }
          </Row>
        </div>
        </>
    );
}