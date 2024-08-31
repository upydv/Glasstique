import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoCartOutline } from "react-icons/io5";
function Cart(props) {
      const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    {/* <Button variant="primary" onClick={handleShow} className="me-2"> */}
    <IoCartOutline size={40} onClick={handleShow} />
    {/* </Button> */}
    <Offcanvas show={show} onHide={handleClose} {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <hr/>
      <Offcanvas.Body style={{ display:'block', textAlign:'center'}}>
        <IoCartOutline size={100}/>
        <p className='fs-3'>Your cart is empty.</p>
        <p>Fill your cart with amazing items</p>
        <Button>Buy Now</Button>
      </Offcanvas.Body>
    </Offcanvas>
  </>
);
}

export default Cart
