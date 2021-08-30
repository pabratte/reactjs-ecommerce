import React, { useState, useEffect, useContext} from 'react';
import ECNavItem from './ECNavItem';
import ECCartWidget from './ECCartWidget';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavbarBrand } from 'react-bootstrap';
import { getCategories } from '../utils/MockAPI'
import { NavLink } from 'react-router-dom';
import { CartContext }  from '../utils/CartProvider';

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
    <Navbar expand="lg">
      <Container>
        <NavbarBrand>
          <NavLink to="/">
            ReactBuy
          </NavLink>
        </NavbarBrand>
        
        {cart.getTotalItems()>0 && <ECCartWidget />}
        
      </Container>
    </Navbar>
    <Container>
      <Nav className="mt-3">
        {categories.map((category) => <ECNavItem key={category.id} categoryId={category.id} name={category.name}></ECNavItem>)}
      </Nav>
    </Container>
  </>
  );
}

export default ECNavBar;
