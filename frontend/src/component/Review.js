import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import '../index.css'
import Container from "react-bootstrap/esm/Container";
export default function Review() {
  return (
    <div className="reviews">
      <h1 style={{color:'white', fontWeight:"bold",padding:5}}> Our reviews</h1>
      <MDBRow className="review-bg">
        <MDBCol md="12">
          <MDBCarousel showControls light bold>
            <MDBCarouselItem className="active">
              <div className="commentbox">
                <Container>
                  <p className="lead font-italic mx-4 mx-md-5 p-3">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!"
                  </p>
                </Container>
              </div>

              <div className="mt-5 mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle img-fluid shadow-1-strong"
                  alt=""
                  width="100"
                  height="100"
                />
                
              </div>
              <p style={{ color: 'white' }}>- Anna Morian</p>
            </MDBCarouselItem>

            <MDBCarouselItem>
            <div className="commentbox">
                <Container>
                  <p className="lead font-italic mx-4 mx-md-5 p-3">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!"
                  </p>
                </Container>
              </div>
              <div className="mt-5 mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                  className="rounded-circle img-fluid shadow-1-strong"
                  alt=""
                  width="100"
                  height="100"
                />
              </div>
              <p style={{ color: 'white' }}>- Teresa May</p>
            </MDBCarouselItem>
            <MDBCarouselItem>
            <div className="commentbox">
                <Container>
                  <p className="lead font-italic mx-4 mx-md-5 p-3">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!"
                  </p>
                </Container>
              </div>
              <div className="mt-5 mb-4">
                <img
                  src="bike.jpeg"
                  className="rounded-circle img-fluid shadow-1-strong"
                  alt=""
                  width="100"
                  height="100"
                />
              </div>
              <p style={{ color: 'white' }}>- Kate Allison</p>
            </MDBCarouselItem>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
