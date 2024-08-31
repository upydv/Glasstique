import React from 'react';
import {
  MDBFooter,
  MDBContainer,

  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'grey' }}>
      <MDBContainer className='pt-4'>
        <img src='logo-2.png' alt=''  height={350} width={350}/>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-white m-1'  // Changed to 'text-white'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-white m-1'  // Changed to 'text-white'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-white m-1'  // Changed to 'text-white'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-white m-1'  // Changed to 'text-white'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-white m-1'  // Changed to 'text-white'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

        </section>
      </MDBContainer>



    </MDBFooter>
  );
}
