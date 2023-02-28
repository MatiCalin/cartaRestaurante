import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { ShoppingCartIcon, UserIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export const CardOne = () => {

  return (

    <div className='CardOne-Container'>
    <Row xs={1} md={4} className="g-4">
      <Card className='CardOne-Subcontainer' style={{ width: '12rem', maxHeight: '15rem', margin: '1rem' }}>
        <ShoppingCartIcon/>
        <Card.Body>
          <Card.Title>Completa tu Orden</Card.Title>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className='CardOne-Subcontainer'  style={{ width: '12rem', maxHeight: '15rem', margin: '1rem' }}>
        <UserIcon/>
        <Card.Body>
          <Card.Title>Staff</Card.Title>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className='CardOne-Subcontainer' style={{ width: '12rem', maxHeight: '15rem', margin: '1rem' }}>
        <MapPinIcon/>
        <Card.Body>
          <Card.Title>Ubicacion</Card.Title>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className='CardOne-Subcontainer' style={{ width: '12rem', maxHeight: '15rem', margin: '1rem' }}>
        <ChatBubbleBottomCenterTextIcon/>
        <Card.Body>
          <Card.Title>Comentarios</Card.Title>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Row>
    </div>
  );
}