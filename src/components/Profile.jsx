import { useState, useContext } from 'react';
import { CartContext } from '../utils/CartProvider';
import { Container, Button, Form } from 'react-bootstrap'
import { useHistory} from 'react-router-dom'
import { saveOrder } from '../utils/API'

export default function Profile () {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const history = useHistory()
    const cart = useContext(CartContext)

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase());
    }

    const validatePhoneNumebr = (phoneNumber) => {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        return re.test(String(phoneNumber).toLowerCase());
    }

    const validate = () => {
        let errors = {}
        if (name == '') errors.name = 'Por favor ingrese su nombre'
        if (phone.length < 6) errors.phone = 'El número de teléfono debe tener al menos 6 dígitos'
        if (!validatePhoneNumebr(phone)) errors.phone = 'Por favor ingrese un número de teléfono válido'
        if (!validateEmail(email)) errors.email = 'Por favor ingrese una dirección de correo electrónico válida'
        if (email !== email2) errors.email2 = 'Las direcciones de correo electrónico deben coincidir'
        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!validate()) return
        saveOrder({name: name, phone: phone, email: email}, cart.items)
        .then(function(orderId){
            cart.clear()
            history.push(`/order/${orderId}`)
        })
        .catch( err => {
            console.log(`Error generating new order: ${err}`)
        })   
    }

    const backToCart = () => {
        history.push(`/cart`)
    }

    return (
        <>
        <h3 className="section-title">Datos personales</h3>
            <Form className="mt-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="Escriba su nombre" />
                    {formErrors.name && <Form.Label className="form-error-label">{formErrors.name}</Form.Label>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" onChange={e => setPhone(e.target.value)} placeholder="123 456 789" />
                    {formErrors.phone && <Form.Label className="form-error-label">{formErrors.phone}</Form.Label>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Dirección de correo electrónico</Form.Label>
                    <Form.Control type="text" onChange={e => setEmail(e.target.value)} placeholder="usuario@ejemplo.com" />
                    {formErrors.email && <Form.Label className="form-error-label">{formErrors.email}</Form.Label>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail2">
                    <Form.Label>Confirmar dirección de correo electrónico</Form.Label>
                    <Form.Control type="text" onChange={e => setEmail2(e.target.value)} placeholder="usuario@ejemplo.com" />
                    {formErrors.email2 && <Form.Label className="form-error-label">{formErrors.email2}</Form.Label>}
                </Form.Group>

                <Form.Group className="mb-3 d-flex justify-content-end">
                    <Button className="button-secondary btn-lg mx-2" type="button" onClick={backToCart}>
                        Volver
                    </Button>
                    <Button className="button-primary btn-lg" type="submit">
                        Finalizar
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}
