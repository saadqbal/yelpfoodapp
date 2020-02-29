// The component for the home page.

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SearchResults from './SearchResults';
//import {FontAwesome, FontAwesomeIcon} from 'react-fontawesome';
import axios from 'axios';

const anywhere = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '';

const HomePage = (props) => {
    let [restaurant, setRestaurant] = useState("");
    let [location, setLocation] = useState("");
    let [restaurantsList, setRestaurantsList] = useState([]);

    const onChangeRestaurant = (event) => {
        setRestaurant(event.target.value);
    }

    const onChangeLocation = (event) => {
        setLocation(event.target.value);
    }

    const searchRestaurant = (event) => {
        console.log(restaurant, location);

        axios.get(`${anywhere}https://api.yelp.com/v3/businesses/search?term=${restaurant}&categories=food&location=${location}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        }).then((res) => {
            console.log("Response: ", res.data.businesses);
            setRestaurantsList(res.data.businesses);
        }).catch((err) => {
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

                                <Form.Control onChange={onChangeRestaurant} placeholder="Restaurant" />

                            </Form.Group>

                            <Form.Group controlId="basic">
                                <Form.Label>Enter Location</Form.Label>
                                <Form.Control onChange={onChangeLocation} placeholder="Location (i.e. Atlanta, GA)" />
                            </Form.Group>
                        </Form>

                        <Button variant="primary" onClick={searchRestaurant}>Submit</Button>
                    </Col>
                </Row>
                {/* If restaurantsList length > 0, show SearchResults, otherwise don't show */}
                { restaurantsList.length > 0 ? <SearchResults restaurantsList={restaurantsList} /> : null   }
            </Container>
        </div>
    );
}

export default HomePage;