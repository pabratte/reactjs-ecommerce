import React, { useContext } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import ECItemCount from './ECItemCount'
import { useHistory } from 'react-router-dom'
import { CartContext }  from '../utils/CartProvider'

function ECItemDetail({item}) {
  const [quantity, setQuantity] = React.useState(1);
  const [showItemCount, setShowItemCount] = React.useState(true);
  const history = useHistory();
  const cart = useContext(CartContext)

  const onAdd = (quantity) => {
    setQuantity(quantity)
    setShowItemCount(false)
  }

  const onCancel = () => {
    setShowItemCount(true)
  }

  const finishShopping = () => {
    cart.addItem(item, quantity)
    history.push('/cart')
  }

  return (
    <Row className="item-detail">
      <Col className="col-md-1">
            <img className="img-responsive item-detail-img" src={item.thumbnail} alt={item.title} />
        </Col>
        <Col className="col-md-6">
            <img className="img-responsive item-detail-img" src={item.thumbnail} alt={item.title} />
        </Col>
        <Col className="col-md-1">
            
        </Col>
    
        <Col className="col-md-4">
            <h2 className="item-detail-title">{item.title}</h2>
            <p className="item-detail-description">{item.description}</p>
            <h3 className="item-detail-price">${item.price}</h3>
            {
              showItemCount ?
              <ECItemCount initial={quantity} onAdd={onAdd} />
              :
              <>
                <Row className="mb-2">
                  <Col>
                    <Button className="block-button" variant="primary" size="lg" onClick={finishShopping}>Go to cart</Button>
                  </Col>
                  <Col>
                    <Button className="block-button" variant="outline-primary" size="lg" onClick={onCancel}>Cancel</Button>
                  </Col>
                </Row>           
              </> 
            }
        </Col>
    </Row>
  )
}

export default ECItemDetail;
