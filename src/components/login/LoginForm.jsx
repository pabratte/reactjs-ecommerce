import React, { useState, useContext, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../utils/AuthProvider';

export default function LoginForm({login}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = useContext(AuthContext)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        login(email, password)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Dirección de correo electrónico</Form.Label>
                <Form.Control type="email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" disabled={auth.loading} type="submit">
                Ingresar
            </Button>
            </Form>
    )
}