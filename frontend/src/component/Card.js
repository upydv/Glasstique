import React from 'react'
import Card from 'react-bootstrap/Card';
function Cards() {
  return (
    <div>
      <Card style={{marginBottom:10, marginTop:10}}>
            <Card.Img variant="top" src="vert.jpeg" height={250}  />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
    </div>
  )
}

export default Cards
