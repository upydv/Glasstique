import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
function Homecard() {
  return (
    
    <div className='bgprimary'>
        
        <Container>
        <h1 style={{padding:5}}>About Glasstique</h1>
        <p>At Glasstique, we believe that even the simplest moments deserve to be extraordinary. That’s why we curate a collection of exquisite glassware designed to elevate your everyday experiences. With every sip, every bite, and every gathering, we invite you to discover the transformative power of beautiful and functional design.</p>
        <Button href='Anoutus.js'>Know More</Button>
        </Container>
<Container>
   
    <h1 >Products</h1>
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="swan.jpg" height={250}   />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    </div>
  )
}

export default Homecard
