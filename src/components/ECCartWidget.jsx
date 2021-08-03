import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function ECCartWidget() {
  return (
        <Nav.Item className="cart-widget">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Nav.Item>
  );
}

export default ECCartWidget;
