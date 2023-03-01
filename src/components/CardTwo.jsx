import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


export const CardTwo = () => {
    const array = [
      {
        img: 'https://placeralplato.com/files/2015/06/lemon-pie-640x480.jpg?width=1200&enable=upscale',
        title: 'Lemon Pie',
        text: 'Tarta de crema de limon con merengue',
        text2: '$300',
        button: 'Comprar',
      },
      {
        img: 'img',
        title: 'Tarta de Frambuesa',
        text: 'Tarta con frambuesas y dulce de leche',
        text2: '$300',
        button: 'comprar',
      },
      {
        img: 'img',
        title: 'Tarta de Frambuesa',
        text: 'Tarta con frambuesas y dulce de leche',
        text2: '$300',
        button: 'comprar',
      },
      {
        img: 'img',
        title: 'Tarta de Frambuesa',
        text: 'Tarta con frambuesas y dulce de leche',
        text2: '$300',
        button: 'comprar',
      },
      {
        img: 'img',
        title: 'Tarta de Frambuesa',
        text: 'Tarta con frambuesas y dulce de leche',
        text2: '$300',
        button: 'comprar',
      },
      {
        img: 'img',
        title: 'Tarta de Frambuesa',
        text: 'Tarta con frambuesas y dulce de leche',
        text2: '$300',
        button: 'comprar',
      },
      {
        img: 'img',
        title: 'Tarta de Frambuesa',
        text: 'Tarta con frambuesas y dulce de leche',
        text2: '$300',
        button: 'comprar',
      },
      {
        img: 'img',
        title: 'Tarta de Frambuesa',
        text: 'Tarta con frambuesas y dulce de leche',
        text2: '$300',
        button: 'comprar',
      },
      {
        img: 'img',
        title: 'Tarta de Frambuesa',
        text: 'Tarta con frambuesas y dulce de leche',
        text2: '$300',
        button: 'comprar',
      },
      {
        img: 'img',
        title: 'Tarta de Frambuesa',
        text: 'Tarta con frambuesas y dulce de leche',
        text2: '$300',
        button: 'comprar',
      },
      {
        img: 'img',
        title: 'Tarta de Frambuesa',
        text: 'Tarta con frambuesas y dulce de leche',
        text2: '$300',
        button: 'comprar',
      },
            {
        img: 'img',
        title: 'Tarta de Frambuesa',
        text: 'Tarta con frambuesas y dulce de leche',
        text2: '$300',
        button: 'comprar',
      },

    ]

    return (    
      
      <div className='cardtwo-container'>
          <Row xs={1} md={4} className="g-4" style={{ margin: '5rem' }}>
            {array.map(( food ) => (
              <Col>
                <Card className='card-food border-light'>
                  <Card.Img className='flex-shrink-0 img-fluid rounded' variant="top" src= {food.img}/>
                  <Card.Body className='card-body'>
                    <Card.Title>{food.title}</Card.Title>
                    <Card.Text> {food.text} </Card.Text>
                    <Card.Text> {food.text2} </Card.Text>
                    <Button variant="secondary">{food.button}</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
    );
  } 
