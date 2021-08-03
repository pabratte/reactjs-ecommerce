import React from 'react';
import ECNavItem from './ECNavItem';
import ECCartWidget from './ECCartWidget';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavbarBrand } from 'react-bootstrap';

function ECNavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <NavbarBrand>
          ReactBuy
        </NavbarBrand>
        <Nav className="me-auto mr-auto">
          <ECNavItem title="Daily deals" />
          <ECNavItem title="Electronics" />
          <ECNavItem title="Home &amp; garden" />
          <ECNavItem title="Health &amp; beauty" />
          <ECNavItem title="Sports" />
        </Nav>
        <ECCartWidget />
      </Container>
    </Navbar>
  );
}

export default ECNavBar;
