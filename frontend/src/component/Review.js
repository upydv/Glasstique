import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
function Review() {
  return (
    <div className='review'>
      <div className='ReviewCarousal' >
        <h1>Reviews</h1>
            <Carousel slide={false}>
                <Carousel.Item>
                <Image src="bike.jpeg" roundedCircle height={50} />

                </Carousel.Item>
                <Carousel.Item>
                <Image src="unicorn.jpeg" roundedCircle height={50} />
                    <Carousel.Caption>
                        <h1 className="caption-text">GLASSTIQUE</h1>
                        <p className='caption-ptext'>Buy with plesure!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image src="bike.jpeg" roundedCircle height={50} />
                    <Carousel.Caption>
                    <h1 className="caption-text">GLASSTIQUE</h1>
                    <p className='caption-ptext'>Buy with plesure!!</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    </div>
  )
}

export default Review
