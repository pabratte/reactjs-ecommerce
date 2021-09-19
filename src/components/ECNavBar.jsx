import React, { useState, useEffect, useContext} from 'react';
import ECNavItem from './ECNavItem';
import ECCartWidget from './ECCartWidget';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavbarBrand } from 'react-bootstrap';
import { getCategories } from '../utils/API'
import { NavLink } from 'react-router-dom';
import { CartContext }  from '../utils/CartProvider';
import mimitos_logo from '../assets/mimitos_logo.png'

function ECNavBar() {
  const [categories, setCategories] = useState([])
  const cart = useContext(CartContext)

  useEffect(() => {    
      getCategories().then(cats => {
        setCategories(cats)
      })
  }, [])

  return (
    <>
    <Navbar expand="lg" className="mimitos-navbar">
      <Container className="navbar-container">
        <NavbarBrand>
          <NavLink to="/">
            mimitos
          </NavLink>
        </NavbarBrand>
        <Nav className="me-auto">
          {categories.map((category) => <ECNavItem key={category.id} categoryId={category.id} name={category.name}></ECNavItem>)}
        </Nav>
        {cart.getTotalItems()>0 && <ECCartWidget />}
        
      </Container>
    </Navbar>
  </>
  );
}

export default ECNavBar;
