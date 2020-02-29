// The component for when you click 'More information' on a specific restaurant.

import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Details = (props) => {
  let location = useLocation();

  const restaurant = location.state.detailsObject;
  console.log(restaurant);
  
  let Cuisines = restaurant.categories.map((item, key) =>
    <p key={key}>{item.title}</p>
  );

  return (
    <div>
      <Container>
        {/* Restaurant Images */}
        <Row className="justify-content-md-center">
          <img alt="restaurant" src={restaurant.image_url} height="400" width="700" />
        </Row>
        <br />

        {/* Restaurant Title */}
        <Row className="justify-content-md-center">
          <h1>{restaurant.name}</h1>
        </Row>

        {/* Google Maps */}
        <Row className="justify-content-md-center">
        <p>Map</p>
        </Row>

        {/* Cuisines */}
        <Row className="justify-content-md-center">
        <p>Cuisines: {Cuisines}</p>
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
        <a href="google.com">Yelp Link</a>
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