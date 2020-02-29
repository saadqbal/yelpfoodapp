// The component for when you click 'More information' on a specific restaurant.

import React, { useState } from 'react';
import { Container, Row, Col, Media, Form, Button } from 'react-bootstrap';

const Details = (props) => {
  return (
    <div>
      <Container>
        {/* Restaurant Images */}
        <Row className="justify-content-md-center">
          <img src="https://emerilsrestaurants.com/wp-content/uploads/2017/05/photo-1-1-500x400.jpg" />
          <img src="https://emerilsrestaurants.com/wp-content/uploads/2017/05/photo-1-1-500x400.jpg" />
        </Row>
        <br />

        {/* Restaurant Title */}
        <Row className="justify-content-md-center">
          <h1>Restaurant Title</h1>
        </Row>

        {/* Google Maps */}
        <Row className="justify-content-md-center">
        <p>Map</p>
        </Row>

        {/* Cuisines */}
        <Row className="justify-content-md-center">
        <p>Cuisines: </p>
        </Row>

        {/* Info */}
        <Row className="justify-content-md-center">
        <Col xs lg="10">
        <p>Price:</p>
        <p>Rating:</p>
        </Col>
        
        <Col>
        <p>Address:</p>
        <p>Phone number:</p>
        <a href="">Yelp Link</a>
        </Col>
        </Row>

        <Row>
          <p>Open Hours:</p>
        </Row>
      </Container>
    </div>
  );
}

export default Details;