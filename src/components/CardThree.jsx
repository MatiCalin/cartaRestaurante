import React from 'react';
import { Button, Card } from 'react-bootstrap';

export const CardThree = () => {

    return (

        <div className='ContainerCardThree'>

            <Card body className="CardThree">
                <Card.Title>
                <h1>Bienvenidos a "FAST FOOD GRILL"</h1></Card.Title>
                <h4>¿Quienes Somos?</h4>
                Somos un restaurante especializado en comida rapida a la parrilla.
                Lo que nos hace diferentes es poder servir comida rapida con menor porcentaje de grasa gracias al uso de nuestras parrillas.
                ¿No te pasa que queres comer algo rapido, pero no queres que sea tan pesado?
                Entonces Fast Food Grill es tu mejor opcion.
                Animate a probar nuestra comida, no te vas a arrepentir.
                <hr></hr>
                <Button variant="secondary"><a href='http://localhost:3000/menu' style={{ color: 'white', textDecoration: 'none' }} >Nuestro Menu</a></Button>
            </Card>

        </div>

    );
}

