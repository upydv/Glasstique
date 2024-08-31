import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../index.css'
function Carousals() {
    return (
        <div className='Carousal' >
            <Carousel slide={false}>
                <Carousel.Item>
                <img className="d-block w-100" src='bike3.jpeg' alt='shopping'  />
                    <Carousel.Caption>
                    <h1 className="caption-text">GLASSTIQUE</h1>
                    <p className='caption-ptext'>Buy with plesure!!</p>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src='swan.jpg' alt='no img' />
                    <Carousel.Caption>
                        <h1 className="caption-text">GLASSTIQUE</h1>
                        <p className='caption-ptext'>Buy with plesure!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src='unicorn.jpeg' alt='no img' />
                    <Carousel.Caption>
                    <h1 className="caption-text">GLASSTIQUE</h1>
                    <p className='caption-ptext'>Buy with plesure!!</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Carousals
