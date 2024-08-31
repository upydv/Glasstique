import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
   MDBBtn
} from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';

function Registration() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow} style={{ cursor: 'pointer' }}>
        Register
      </Nav.Link>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <div className='d-flex '>
              <MDBCol md={10}>
              <MDBBtn className='p-20'>Register</MDBBtn>
              </MDBCol>
              
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <MDBContainer fluid className='bg-danger'>
            <MDBRow className='d-flex justify-content-center align-items-center'>
              <MDBCol>
                <MDBCard className='my-4'>
                  <MDBRow className='g-0'>
                    <MDBCol md='4' className="d-none d-md-block">
                      <MDBCardImage
                        src='vert.jpeg'
                        alt="Sample photo"
                        className="rounded-start"
                        fluid
                        style={{ display: "block", width: 300, height: 500 }}
                      />
                    </MDBCol>

                    <MDBCol md='8'>
                      <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                        <MDBRow>
                          <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                          </MDBCol>

                          <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' />
                          </MDBCol>
                        </MDBRow>





                        <MDBInput wrapperClass='mb-4' label='Pincode' size='lg' id='form4' type='text' />
                        <MDBInput wrapperClass='mb-4' label='Course' size='lg' id='form5' type='text' />
                        <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text' />

                        <div className="d-flex justify-content-end pt-3">
                          <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                          <MDBBtn className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
                        </div>

                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Registration;
