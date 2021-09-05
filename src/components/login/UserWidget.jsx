import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { AuthContext } from '../../utils/AuthProvider';
import { GoogleAuthProvider, signOut } from "firebase/auth";


export default function UserWidget() {
    const auth = useContext(AuthContext)

    const signOut = () => {
        auth.signOut()
    }

    return (
        <NavDropdown
          title={auth.user.displayName}
        >
          <NavDropdown.Item href="#" disabled>Perfil</NavDropdown.Item>
          <NavDropdown.Item href="#" disabled>Mis compras </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="" onClick={signOut}>Cerrar sesión</NavDropdown.Item>
        </NavDropdown>     
    )
}
