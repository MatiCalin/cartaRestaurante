import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

export const CarouselHome = () => {

    return (

        <div className='CarouselContainer'>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="cover-image"
                src="https://apasionados-por-el-cafe.s3.amazonaws.com/wp-content/uploads/2020/07/%C2%BFQu%C3%A9-es-el-Arte-Latte-y-c%C3%B3mo-convertirse-en-un-gran-artista-.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>DISFRUTA NUESTRA COMIDA </h1>
                <p></p>
                <Button variant="outline-light">Haz tu Reserva</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="cover-image"
                src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/H67CTAYXVNF6PCO3NSFDU2VWC4.jpg"
                alt="Second slide"
              />
  
              <Carousel.Caption>
                <h1>PRUEBA DISTINTOS SABORES</h1>
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
                <h1>CAFETERIA DE PRIMERA CALIDAD</h1>
                <p></p>
                <Button variant="outline-light">Haz tu reserva</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        );
    }