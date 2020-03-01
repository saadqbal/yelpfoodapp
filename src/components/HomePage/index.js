// The component for the home page.

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SearchResults from './SearchResults';
//import {FontAwesome, FontAwesomeIcon} from 'react-fontawesome';
import axios from 'axios';

const anywhere = 'https://cors-anywhere.herokuapp.com/';

// Enter your own Yelp Fusion API key here
const API_KEY = '';

// Function for the homepage
const HomePage = (props) => {
    // Define states
    let [restaurant, setRestaurant] = useState("");
    let [location, setLocation] = useState("");
    let [restaurantsList, setRestaurantsList] = useState([]);
    //let [restaurantsID, setRestaurantsID] = useState("");

    // Set the restaurant text in the restaurant state
    const onChangeRestaurant = (event) => {
        setRestaurant(event.target.value);
    }

    // Set the location text in the location state
    const onChangeLocation = (event) => {
        setLocation(event.target.value);
    }

    const searchRestaurant = (event) => {
        // Send a GET request to the Yelp API and filter businesses to food
        axios.get(`${anywhere}https://api.yelp.com/v3/businesses/search?term=${restaurant}&categories=food&location=${location}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        }).then((res) => {
            // Set business array in restaurantsList state
            setRestaurantsList(res.data.businesses);
        }).catch((err) => {
            // Otherwise catch error and log it to console
            console.log("Error occured: ", err);
        })
    }
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs="6">
                        <h1>Restaurant-Searcher</h1>
                        {/* Form for entering Restaurant Name and Location */}
                        <Form>
                            <Form.Group controlId="basic">
                                <Form.Label>Enter Restaurant</Form.Label>
                                {/* When Form text changes, call onChangeRestaurant() */}
                                <Form.Control onChange={onChangeRestaurant} placeholder="Restaurant" />
                            </Form.Group>

                            <Form.Group controlId="basic">
                                <Form.Label>Enter Location</Form.Label>
                                {/* When Form text changes, call onChangeLocation() */}
                                <Form.Control onChange={onChangeLocation} placeholder="Location (i.e. Atlanta, GA)" />
                            </Form.Group>
                        </Form>
                        
                        {/* When button is pressed, call searchRestaurant() */}
                        <Button variant="primary" onClick={searchRestaurant}>Submit</Button>
                    </Col>
                </Row>

                {/* If restaurantsList length > 0, show SearchResults component, otherwise don't show */}
                { restaurantsList.length > 0 ? <SearchResults restaurantsList={restaurantsList} /> : null   }
            </Container>
        </div>
    );
}

export default HomePage;