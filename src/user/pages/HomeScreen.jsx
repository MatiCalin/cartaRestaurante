import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./HomeScreen.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const HomeScreen = () => {

  return (
    <>
    <div className=''>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="coverimage"
          src="https://apasionados-por-el-cafe.s3.amazonaws.com/wp-content/uploads/2020/07/%C2%BFQu%C3%A9-es-el-Arte-Latte-y-c%C3%B3mo-convertirse-en-un-gran-artista-.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="coverimage"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/H67CTAYXVNF6PCO3NSFDU2VWC4.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="coverimage"
          src="https://agenciadeaprendizaje.bue.edu.ar/wp-content/uploads/2021/04/iniciacion-a-la-pasteleria.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <div>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img className='cardimage' variant="left" src="holder.js/100px160https://i.blogs.es/45c847/15-recetas-de-tartas-que-siempre-quisiste-hacer-en-su-version-mas-facil-/1366_2000.jpeg" />
            <Card.Body>
              <Card.Title>Lemon Pie</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </>
  )
};


