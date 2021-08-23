import { useContext } from 'react';
import { Button, Container, Alert, Row, Col } from 'react-bootstrap';
import { CartContext }  from '../utils/CartProvider';
import { useHistory } from 'react-router-dom'
import ECCartItem from './ECCartItem'

function ECCart() {
  const cart = useContext(CartContext)
  const history = useHistory()

  const checkout = () => {
    
    history.push('/checkout')
  }

  return (
        <Container className="mt-3">
            {cart.isEmpty() && <Alert variant="secondary" className="cart-empty">The cart is empty</Alert>}
            {!cart.isEmpty() && 
            <>
              <Row>
                <Col className="cart-table-title">Your items</Col>
              </Row>
              {cart.items.map(item => <ECCartItem key={item.id} item={item} />)}
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
  );
}

export default ECCart;
