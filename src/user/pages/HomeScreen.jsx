import React from 'react';
import { Carousel, Card, Col, Row, Button } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import "../pages/HomeScreen.css";



export const HomeScreen = () => {

  return (
    <>
      <div className=''>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="cover-image"
              src="https://apasionados-por-el-cafe.s3.amazonaws.com/wp-content/uploads/2020/07/%C2%BFQu%C3%A9-es-el-Arte-Latte-y-c%C3%B3mo-convertirse-en-un-gran-artista-.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>DISFRUTA NUESTRA COMIDA DELICIOSA</h1>
              <p></p>
              <Button variant="outline-light">Haz tu reserva</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cover-image"
              src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/H67CTAYXVNF6PCO3NSFDU2VWC4.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2>Prueba distintos sabores</h2>
              <p></p>
              <Button variant="outline-light">Haz tu reserva</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cover-image"
              src="https://agenciadeaprendizaje.bue.edu.ar/wp-content/uploads/2021/04/iniciacion-a-la-pasteleria.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>Cafeteria de primera calidad</h2>
              <p></p>
              <Button variant="outline-light">Haz tu reserva</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      <div>
          <CardGroup className='card-group'>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>


      <div>
        <h5 class="section-title ff-secondary text-start text-primary fw-normal"> Sobre Nosotros </h5>
      </div>


      <div className='card-container'>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card className='border-light'>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body className='card-body'>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

    </>
  );
};


