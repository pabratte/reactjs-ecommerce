import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext }  from '../utils/CartProvider';

function ECCartWidget() {
  const cart = useContext(CartContext)
  
  return (
        <div className="cart-widget">
          <FontAwesomeIcon icon={faShoppingCart} />
          <div className="item-count">{cart.items.length}</div>
        </div>
  );
}

export default ECCartWidget;
