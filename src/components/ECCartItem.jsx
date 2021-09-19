import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function ECCartItem({item, quantity, onRemove}) {
    const removeItem = () => {
        onRemove(item.id)
    }
    return (
        <Row className="cart-table-row">
            <Col className="col-md-1 d-flex align-items-center">
                <img alt={item.description} className="img-responsive cart-list-img" src={`${item.thumbnail}`}></img>
            </Col>
            <Col className="col-md-1 cart-col-quantity d-flex align-items-center">
                {quantity}
            </Col>
            <Col className="col-md-7 d-flex align-items-center">{item.title}</Col>
            <Col className="col-md-2 cart-col-price d-flex align-items-center justify-content-end">{`$${item.price * quantity}`}</Col>
            <Col className="col-md-1 cart-col-price d-flex align-items-center justify-content-end">
                <Button className="button-secondary button-cart-remove-item" title="Quitar" onClick={removeItem}><FontAwesomeIcon icon={faTimes} /></Button>
            </Col>
        </Row>
    )
}