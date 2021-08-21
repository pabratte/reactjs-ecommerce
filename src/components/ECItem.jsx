import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function ECItem({item}) {
  return (
        <Col className="col-3" >
            <Card className="m-2">
                <Card.Img variant="top" src={item.thumbnail} />
                <Card.Body>
                    <Card.Title className="item-card-title">{item.title}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Link to={`/item/${item.id}`} className="btn btn-primary">
                    Add to cart
                    </Link>
                </Card.Body>
            </Card>
        </Col>
  );
}

export default ECItem;
