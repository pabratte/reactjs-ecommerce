import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';

function ECItemDetail(props) {
  return (
    <Row className="item-detail">
        <Col className="col-md-5">
            <img className="img-responsive item-detail-img" src={props.item.pictureUrl} />
        </Col>
    
        <Col className="col-md-6">
            <h2 className="item-detail-title">{props.item.title}</h2>
            <p className="item-detail-description">{props.item.description}</p>
            <h3 className="item-detail-price">${props.item.price}</h3>
            <Button variant="primary">Add to cart</Button>
        </Col>
    </Row>
  )
}

export default ECItemDetail;
