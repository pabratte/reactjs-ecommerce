import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import ECItemCount from './ECItemCount'
import { useHistory } from 'react-router-dom'

function ECItemDetail(props) {
  const [quantity, setQuantity] = React.useState(1);
  const [showItemCount, setShowItemCount] = React.useState(true);
  const history = useHistory();

  const onAdd = (quantity) => {
    setQuantity(quantity)
    setShowItemCount(false)
  }

  const onCancel = () => {
    setShowItemCount(true)
  }

  const finishShopping = () => {
    history.push('/cart')
  }

  return (
    <Row className="item-detail">
        <Col className="col-md-5">
            <img className="img-responsive item-detail-img" src={props.item.thumbnail} alt={props.item.title} />
        </Col>
    
        <Col className="col-md-6">
            <h2 className="item-detail-title">{props.item.title}</h2>
            <p className="item-detail-description">{props.item.description}</p>
            <h3 className="item-detail-price">${props.item.price}</h3>
            {
              showItemCount ?
              <ECItemCount initial={quantity} onAdd={onAdd} />
              :
              <>
                <Row className="mb-2">
                  <Button variant="primary" size="lg" onClick={finishShopping}>Go to cart</Button>
                </Row>
                <Row>
                  <Button variant="outline-primary" onClick={onCancel}>Cancel</Button>
                </Row>
              </> 
            }
        </Col>
    </Row>
  )
}

export default ECItemDetail;
