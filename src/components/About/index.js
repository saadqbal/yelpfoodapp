import React, {  } from 'react';
import { Container, Row, Col, Media, Form, Button } from 'react-bootstrap';
import './style.css';

const About = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Media>
                            <img alt="logo" className="img-margin" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
                            <Media.Body>
                                <h1>About Restaurant-Searcher</h1>
                                <p>Description of me. This app finds restaurants using Google Maps and Yelp Fusion API. Github link: </p>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col xs="6">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                    </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;