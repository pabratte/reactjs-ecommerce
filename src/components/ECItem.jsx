import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

function ECItem(props) {
  return (
        <Col className="col-3" >
            <Card className="m-2">
                <Card.Img variant="top" src={props.item.thumbnail} />
                <Card.Body>
                    <Card.Title className="item-card-title">{props.item.title}</Card.Title>
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
