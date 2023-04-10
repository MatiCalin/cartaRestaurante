import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { ShoppingCartIcon, UserIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';



export const CardOne = () => {

  return (
    <>
      <div className='CardOne-Container'>
        <Row xs={1} md={3} className="g-4">
          <Card className='CardOne-Subcontainer' style={{ width: '11rem', maxHeight: '15rem', margin: '1rem' }}>
            <ShoppingCartIcon />
            <Card.Body>
              <Button variant="secondary">
                <a href='http://localhost:3000/menu' style={{ color: 'white', textDecoration: 'none' }} >Haz tu Pedido</a>
              </Button>
            </Card.Body>
          </Card>

          <Card className='CardOne-Subcontainer' style={{ width: '11rem', maxHeight: '15rem', margin: '1rem' }}>
            <UserIcon />
            <Card.Body>
              <Button variant="secondary">
                <a href='http://localhost:3000/nosotros' style={{ color: 'white', textDecoration: 'none' }}>Nosotros</a>
              </Button>
            </Card.Body>
          </Card>

          <Card className='CardOne-Subcontainer' style={{ width: '11rem', maxHeight: '15rem', margin: '1rem' }}>
            <ChatBubbleBottomCenterTextIcon />
            <Card.Body>
              <Button variant="secondary">
                <a href='http://localhost:3000/404' style={{ color: 'white', textDecoration: 'none' }}>Comentarios</a>
              </Button>
            </Card.Body>
          </Card>

        </Row>
      </div>
         
    </>
  );
}
