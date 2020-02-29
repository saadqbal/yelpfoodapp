// The component that appears when you click 'Submit' on the main page.

import React, { } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Button, Card } from 'react-bootstrap';
import './style.css';

const SearchResults = (props) => {
    let history = useHistory();

    function restaurantDetails(item) {
        history.push('/details', {
            // detailsobject prop
            detailsObject: item
        });
    }

    let Restaurants = props.restaurantsList.map((item, key) =>
        <Card key={key} className="card-margin">
            <Card.Img variant="top" src={item.image_url} height="250" />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.location.address1}, {item.location.city}, {item.location.state} {item.location.zip_code}
                </Card.Text>
                <Button onClick={() => {
                    restaurantDetails(item);
                }} variant="primary">More information</Button>
            </Card.Body>
        </Card>
    );

    return (
        <div>
            <br />
            <Container>
                {/* Center row */}
                <Row className="justify-content-md-center">
                    {/* The cards that will display the restaurant information */}
                    {Restaurants}
                </Row>

            </Container>
        </div>
    );
}

export default SearchResults;