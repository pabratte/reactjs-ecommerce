
import { useContext, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { AuthContext } from '../../utils/AuthProvider';
import LoginForm from './LoginForm'
import Form from 'react-bootstrap/Form'

export default function LoginWindow({show, hide}) {
    const auth = useContext(AuthContext);
    useEffect(() => {
        if(auth.user) {
            hide();
        }
    }, [auth.lastError, auth.user])

    const onLoginWithGoogle = () => {
        auth.loginWithGoogle()
    }



    return (
        <Modal show={show} onHide={hide}>
            <Modal.Body>
                <h2>Iniciar sesión</h2>
                {auth.lastError && <Alert variant="danger">{auth.lastError}</Alert>}
                <LoginForm login={auth.loginWithUserEmailAndPassword}/>
                
                <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                    <Form.Label>No tienes usuario? Crea uno</Form.Label>
                </Form.Group>

                <Button variant="primary" onClick={onLoginWithGoogle}>
                    Continuar con Google
                </Button>
            
            </Modal.Body>
        
        </Modal>
    )
}