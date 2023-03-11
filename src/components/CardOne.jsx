import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { ShoppingCartIcon, UserIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export const CardOne = () => {

  return (

    <div className='CardOne-Container'>
    <Row xs={2} md={3} className="g-4">
      <Card className='CardOne-Subcontainer' style={{ width: '12rem', maxHeight: '15rem', margin: '1rem' }}>
        <ShoppingCartIcon/>
        <Card.Body>
          <Card.Title>Haz tu Pedido</Card.Title>
          <Button variant="secondary">Pedidos</Button>
        </Card.Body>
      </Card>

      <Card className='CardOne-Subcontainer'  style={{ width: '12rem', maxHeight: '15rem', margin: '1rem' }}>
        <UserIcon/>
        <Card.Body>
          <Card.Title>Staff</Card.Title>
          <Button variant="secondary">Ve el staff</Button>
        </Card.Body>
      </Card>

      <Card className='CardOne-Subcontainer' style={{ width: '12rem', maxHeight: '15rem', margin: '1rem' }}>
        <MapPinIcon/>
        <Card.Body>
          <Card.Title>Ubicacion</Card.Title>
          <Button variant="secondary">Ubicacion</Button>
        </Card.Body>
      </Card>

      <Card className='CardOne-Subcontainer' style={{ width: '12rem', maxHeight: '15rem', margin: '1rem' }}>
        <ChatBubbleBottomCenterTextIcon/>
        <Card.Body>
          <Card.Title>Comentarios</Card.Title>
          <Button variant="secondary">Comentarios</Button>
        </Card.Body>
      </Card>
    </Row>
    </div>
  );
}