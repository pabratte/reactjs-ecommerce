import { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CartContext }  from '../utils/CartProvider'
import { useHistory } from 'react-router-dom'

export default function ECCheckout() {
    const cart = useContext(CartContext)
    const history = useHistory()
    
    const payAndFinish = () => {
        cart.clear()
        history.push('/')
    }

    return (
        <Container>
            <Row className="mt-3">
                <Col xs={12}>
                    <Button variant="primary" onClick={payAndFinish}>Pay &amp; finish</Button>
                </Col>
            </Row>
        </Container>
    )
}