import { useContext, useState } from 'react';
import { Button, Container, Alert, Row, Col, Modal } from 'react-bootstrap';
import { CartContext }  from '../utils/CartProvider';
import { useHistory} from 'react-router-dom'
import ECCartItem from './ECCartItem'

function ECCart() {
  const cart = useContext(CartContext)
  const history = useHistory()
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setitemToRemove] = useState(null);

  const handleClose = () => {
    setShowModal(false)
    setitemToRemove(null)
  }
  
  const checkout = () => {
    history.push('/checkout')
  }

  const onRemove = (itemId) => {
    setShowModal(true)
    setitemToRemove(itemId)
  }

  const confirmRemove = () => {
    cart.removeItem(itemToRemove)
    handleClose()
  }

  const goToHome = () => {
    history.push('/')
  }

  return (
    <>
        <Container className="mt-3">
            {cart.isEmpty() && <Alert variant="secondary" className="cart-empty"><div>The cart is empty</div><Button variant="primary" onClick={goToHome}>Go shopping!</Button></Alert>}
            {!cart.isEmpty() && 
            <>
              <Row>
                <Col className="cart-table-title">Your items</Col>
              </Row>
              {cart.items.map(item => <ECCartItem key={item.item.id} item={item.item} quantity={item.quantity} onRemove={onRemove}/>)}
              <Row>
                <Col className="cart-table-total">
                  {`Total: $${cart.getTotalPrice()}`}
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="p-0">
                  <Button variant="primary" onClick={checkout} className="btn-lg">Checkout</Button>
                </Col>
              </Row>
            </>
            }
        </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really wish to remove this item from the cart?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default ECCart;
