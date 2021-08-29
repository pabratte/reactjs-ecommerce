import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext }  from '../utils/CartProvider';
import { Link } from 'react-router-dom'

function ECCartWidget() {
  const cart = useContext(CartContext)
  
  return (
        <Link to="/cart" className="cart-widget">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cart.getTotalItems()>0 && <div className="cart-widget-item-count">{cart.getTotalItems()}</div>}
        </Link>
  );
}

export default ECCartWidget;
