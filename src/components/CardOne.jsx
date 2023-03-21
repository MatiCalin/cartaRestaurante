import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { ShoppingCartIcon, UserIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
/* import GoogleMaps from "simple-react-google-maps"; */


export const CardOne = () => {

  return (
    <>
      <div className='CardOne-Container'>
        <Row xs={1} md={3} className="g-4">
          <Card className='CardOne-Subcontainer' style={{ width: '12rem', maxHeight: '15rem', margin: '1rem' }}>
            <ShoppingCartIcon />
            <Card.Body>
              <Button variant="secondary">
                <a href='http://localhost:3000/menu' style={{ color: 'white', textDecoration: 'none' }} >Haz tu Pedido</a>
              </Button>
            </Card.Body>
          </Card>

          <Card className='CardOne-Subcontainer' style={{ width: '12rem', maxHeight: '15rem', margin: '1rem' }}>
            <UserIcon />
            <Card.Body>
              <Button variant="secondary">
                <a href='http://localhost:3000/404' style={{ color: 'white', textDecoration: 'none' }}>Nosotros</a>
              </Button>
            </Card.Body>
          </Card>

          <Card className='CardOne-Subcontainer' style={{ width: '12rem', maxHeight: '15rem', margin: '1rem' }}>
            <ChatBubbleBottomCenterTextIcon />
            <Card.Body>
              <Button variant="secondary">
                <a href='http://localhost:3000/404' style={{ color: 'white', textDecoration: 'none' }}>Comentarios</a>
              </Button>
            </Card.Body>
          </Card>

        </Row>
      </div>
{/*       <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyAIoaqD6zupornIMbdYcAfDaTSHjAjFWJ4"}
          style={{ height: "400px", width: "300px" }}
          zoom={12}
          center={{
            lat: 40.4127355,
            lng: -3.695428
          }}
          markers={[
            { lat: 40.409711, lng: -3.692569 },
            { lat: 40.412072, lng: -3.676463 },
            { lat: 40.451824, lng: -3.690759 }
          ]}
        />
      </div> */}

{/*       <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.8492998298166!2d-65.2970873!3d-26.8129267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242d7642ecf67%3A0x697ae6b582d34865!2sAv.%20Aconquija%201900%2C%20T4107%20Yerba%20Buena%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1678553609623!5m2!1ses-419!2sar" width="900" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}
    
    </>
  );
}
