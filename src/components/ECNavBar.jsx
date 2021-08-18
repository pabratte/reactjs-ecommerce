import React, { useState, useEffect} from 'react';
import ECNavItem from './ECNavItem';
import ECCartWidget from './ECCartWidget';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavbarBrand } from 'react-bootstrap';
import { getCategories } from '../utils/MockAPI'
import { NavLink } from 'react-router-dom';

function ECNavBar() {
  const [categories, setCategories] = useState([])

  useEffect(() => {    
      getCategories().then(categories => {
        setCategories(categories)
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
        
        <ECCartWidget />
        
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
