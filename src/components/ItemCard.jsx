import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

export default function ItemCard({item}) {
    const history = useHistory()
    const clickHandler = () => {
        history.push(`/item/${item.id}`)
    }
    return (
        <Col className="col-lg-3 col-md-4 col-sm-2 col-xs-1" >
            <Card className="m-2 item-card" onClick={clickHandler}>
                <div className="thumbnail-wrapper">
                    <Card.Img variant="top" src={item.thumbnail} />
                </div>
                <Card.Body>
                    <Card.Title className="title">{item.title}</Card.Title>
                    <Card.Title className="price">${item.price}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}
