import React from 'react'
import Cards from '../component/Card'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
function Products() {
    return (
        <div className='bg-primary'>
            <Row md={4}>
                {
                    Array.from({ length: 10 }).map((_, idx) => (
                        <Col key={idx}>
                            <Cards />
                        </Col>
                    ))
                }

            </Row>

        </div>
    )
}

export default Products
