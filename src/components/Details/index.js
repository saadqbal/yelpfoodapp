// The component for when you click 'More information' on a specific restaurant.

import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Details = (props) => {
  // Create location object
  let location = useLocation();

  // Restaurant is the prop of location.state - contains the specific restaurant that was clicked on
  const restaurant = location.state.detailsObject;
  console.log(restaurant);
  
  // Map function to loop through sub-array categories to find type of cuisines
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

        {/* General Information */}
        <Row className="justify-content-md-center">
        <Col xs lg="9">
          {/* Display Closed or Open depending on restaurant.is_closed */}
        <p>{ restaurant.is_closed ? "Closed" : "Open"   }</p>
        {/* Some restaurants don't have price value, so don't display if this is the case */}
        <p>{ restaurant.price != null ? `Price: ${restaurant.price}` : null }</p>
        <p>Rating: {restaurant.rating} / 5</p>
        </Col>
        
        <Col>
        <p>Address: {restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</p>
        <p>Phone number: {restaurant.display_phone}</p>
        <a href={restaurant.url}>Yelp Link</a>
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