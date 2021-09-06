import { useState, useContext } from 'react';
import { CartContext } from '../utils/CartProvider';
import { Container, Button, Form } from 'react-bootstrap'
import { useHistory} from 'react-router-dom'
import { saveOrder } from '../utils/API'

export default function Profile () {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory()
    const cart = useContext(CartContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        saveOrder({name: name, phone: phone, email: email}, cart.items)
        .then(function(orderId){
            cart.clear()
            history.push(`/order/${orderId}`)
        })
        .catch( err => {
            console.log(`Error generating new order: ${err}`)
        })
        
    }

    return (
        <Container>
            <Form className="mt-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="Your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" onChange={e => setPhone(e.target.value)} placeholder="123 456 789" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="Your email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Pay &amp; finish
                </Button>
            </Form>
        </Container>

    )
}
