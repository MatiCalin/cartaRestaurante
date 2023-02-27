import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';


export const CardOne = () => {

  return (

    <div className='CardOne-Container'>
    <Row xs={1} md={3} className="g-4">
      <Card className='CardOne-Subcontainer' style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Title>Completa tu Orden</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className='CardOne-Subcontainer'  style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvhv0O3BSiXARWjXn4raF0BOBF0aptPbFiskF1e0yX_hjOj19XAaNHU_WLAiWAKczO7w&usqp=CAU" />
        <Card.Body>
          <Card.Title>Staff</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className='CardOne-Subcontainer'  style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/552/728/small/location_pin_007.jpg" />
        <Card.Body>
          <Card.Title>Ubicacion</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Row>
    </div>
  );
}