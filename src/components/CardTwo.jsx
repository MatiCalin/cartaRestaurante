import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


export const CardTwo = () => {

    return (    
      
      <div className='card-container'>
          <Row xs={1} md={2} className="g-4">
            {Array.from({length: 6 }).map((_, idx) => (
              <Col>
                <Card className='border-light'>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body className='card-body'>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
  
    );
  } 

  /* 
  
  
  
  */