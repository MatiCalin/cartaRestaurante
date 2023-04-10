import React from "react";
import { Button, Card } from "react-bootstrap";

export const CardThree = () => {
  const idVideo = "ZRQeBKTbzYk";
  return (
    <div>
      <div className="ContainerCardThree">
        <Card body className="CardThree">
          <Card.Title>
            <h1>Bienvenidos a "FAST FOOD GRILL"</h1>
          </Card.Title>
          <h4>¿Quienes Somos?</h4>
          Somos un restaurante especializado en comida rapida a la parrilla. Lo
          que nos hace diferentes es poder servir comida rapida con menor
          porcentaje de grasa gracias al uso de nuestras parrillas. ¿No te pasa
          que queres comer algo rapido, pero no queres que sea tan pesado?
          Entonces Fast Food Grill es tu mejor opcion. Animate a probar nuestra
          comida, no te vas a arrepentir.
          <hr></hr>
          <Button variant="secondary">
            <a
              href="http://localhost:3000/menu"
              style={{ color: "white", textDecoration: "none" }}
            >
              Nuestro Menu
            </a>
          </Button>
        </Card>
      </div>
      <div className="my-3 videoContainer">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${idVideo}?autoplay=1&mute=1&loop=1&playlist=${idVideo}&controls=0`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="homeVideo"
        />
      </div>
    </div>
  );
};
