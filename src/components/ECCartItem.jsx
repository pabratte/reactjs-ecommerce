import { Row, Col } from 'react-bootstrap';

export default function ECCartItem({item}) {
    return (
        <Row className="cart-table-row">
            <Col className="col-md-1"><img className="img-responsive cart-list-img" src={`${item.thumbnail}`}></img></Col>
            <Col className="col-md-1 cart-col-quantity">{item.quantity}</Col>
            <Col className="col-md-8">{item.title}</Col>
            <Col className="col-md-2 cart-col-price">{`$${item.price * item.quantity}`}</Col>
        </Row>
    )
}