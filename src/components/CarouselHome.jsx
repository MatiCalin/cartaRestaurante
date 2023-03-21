import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

export const CarouselHome = () => {

    return (

        <div className='CarouselContainer'>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="cover-image"
                src="https://restaurantemercadoleon.com/wp-content/uploads/2020/09/hamburguesa-portada.jpg"
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
                src="https://elplanetaurbano.com/wp-content/uploads/2023/02/pizza-planeta-urbano-00.jpg"
                alt="Second slide"
              />
  
              <Carousel.Caption>
                <h1>PRUEBA DISTINTAS OPCIONES</h1>
                <p></p>
                <Button variant="outline-light">Haz tu reserva</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="cover-image"
                src="https://ventuscorp.pe/wp-content/uploads/2021/07/Blog-Ventus-Papas-fritas.png"
                alt="Third slide"
              />
  
              <Carousel.Caption>
                <h1>NO TE QUEDES CON LAS GANAS</h1>
                <p></p>
                <Button variant="outline-light">Haz tu reserva</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        );
    }