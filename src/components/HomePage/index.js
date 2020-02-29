// The component for the home page.

import React, { useState } from 'react';
import { Container, Row, Col, Media, Form, Button, InputGroup } from 'react-bootstrap';
import SearchResults from './SearchResults';
//import {FontAwesome, FontAwesomeIcon} from 'react-fontawesome';

const HomePage = (props) => {
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
                                
                                <Form.Control placeholder="Restaurant" />
                                
                            </Form.Group>

                            <Form.Group controlId="basic">
                                <Form.Label>Enter Location</Form.Label>
                                <Form.Control placeholder="Location (i.e. Atlanta, GA)" />
                            </Form.Group>
                        </Form>

                        <Button variant="primary">Submit</Button>
                    </Col>
                </Row>
                <SearchResults />
            </Container>
        </div>
    );
}

export default HomePage;