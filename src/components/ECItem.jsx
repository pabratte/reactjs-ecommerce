import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

function ECItem(props) {
  return (
        <Col>
            <Card className="m-2">
                <Card.Img variant="top" src={props.item.pictureUrl} />
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>
                        {props.item.description}
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </Col>
  );
}

export default ECItem;
