import React from 'react';
import ECNavItem from './ECNavItem';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function ECNavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Nav className="me-auto">
          <ECNavItem title="Daily deals" />
          <ECNavItem title="Electronics" />
          <ECNavItem title="Home &amp; garden" />
          <ECNavItem title="Health &amp; beauty" />
          <ECNavItem title="Sports" />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ECNavBar;
