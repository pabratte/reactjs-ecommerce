import React, { useState, useEffect, useContext} from 'react';
import ECNavItem from './ECNavItem';
import ECCartWidget from './ECCartWidget';
import UserWidget from './login/UserWidget';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavbarBrand, Button } from 'react-bootstrap';
import { getCategories } from '../utils/API'
import { NavLink } from 'react-router-dom';
import { CartContext }  from '../utils/CartProvider';
import { AuthContext }  from '../utils/AuthProvider';
import  LoginWindow from './login/LoginWindow';


function ECNavBar() {
  const [categories, setCategories] = useState([])
  const [showLogin, setShowLogin] = useState(false)
  const cart = useContext(CartContext)
  const auth = useContext(AuthContext)

  useEffect(() => {    
      getCategories().then(cats => {
        setCategories(cats)
      })
  }, [])

  const onShowLogin = () => {
    setShowLogin(true)
  }

  const onHideLogin = () => {
    setShowLogin(false)
  }

  return (
    <>
    <Navbar expand="lg">
      <Container>
        <NavbarBrand>
          <NavLink to="/">
            ReactBuy
          </NavLink>
        </NavbarBrand>
        
        {cart.getTotalItems()>0 && <ECCartWidget />}
        {auth.user?<UserWidget />:<Button onClick={onShowLogin}>Login</Button>}
        
      </Container>
    </Navbar>
    <Container>
      <Nav className="mt-3">
        {categories.map((category) => <ECNavItem key={category.id} categoryId={category.id} name={category.name}></ECNavItem>)}
      </Nav>
    </Container>
    <LoginWindow show={showLogin} hide={onHideLogin} />
  </>
  );
}

export default ECNavBar;
