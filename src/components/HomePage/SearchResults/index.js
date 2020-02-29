// The component that appears when you click 'Submit' on the main page.

import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './style.css';

const SearchResults = (props) => {
    return (
        <div>
            <br />
            <Container>
                {/* Center row */}
                <Row className="justify-content-md-center">
                    {/* The cards that will display the restaurant information */}
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/grunge-black-background-texture-space-260nw-373662322.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">More information</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/grunge-black-background-texture-space-260nw-373662322.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">More information</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/grunge-black-background-texture-space-260nw-373662322.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">More information</Button>
                        </Card.Body>
                    </Card>
                </Row>

                {/* New Row */}
                <Row className="justify-content-md-center">
                    {/* The cards that will display the restaurant information */}
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/grunge-black-background-texture-space-260nw-373662322.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">More information</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/grunge-black-background-texture-space-260nw-373662322.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">More information</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/grunge-black-background-texture-space-260nw-373662322.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">More information</Button>
                        </Card.Body>
                    </Card>
                </Row>

            </Container>
        </div>
    );
}

export default SearchResults;