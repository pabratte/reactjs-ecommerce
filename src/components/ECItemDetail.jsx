import React, { useContext } from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap';
import ECItemCount from './ECItemCount'
import { useHistory } from 'react-router-dom'
import { CartContext }  from '../utils/CartProvider'
import ModalConfirm from './ModalConfirm'

function ECItemDetail({item}) {
  const [quantity, setQuantity] = React.useState(1);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const history = useHistory();
  const cart = useContext(CartContext)

  const onAdd = () => {
    cart.addItem(item, quantity)
    history.push('/cart')
  }

  const onShowModal = (quantity) => {
    setQuantity(quantity)
    setShowConfirmModal(true)
  }

  const onCancel = () => {
    setShowConfirmModal(false)
  }

  return (
    <Container>
      <Row className="item-detail">
          <Col className="col-md-1">
              <img className="img-responsive img thumbnail" src={item.thumbnail} alt={item.title} />
          </Col>
          <Col className="col-md-6">
              <img className="img-responsive img" src={item.thumbnail} alt={item.title} />
          </Col>
          <Col className="col-md-1">
              
          </Col>
      
          <Col className="col-md-4">
              <h2 className="title px-2">{item.title}</h2>
              <h3 className="price px-2">${item.price}</h3>
              <ECItemCount initial={quantity} onAdd={onShowModal} />
          </Col>
      </Row>
      <ModalConfirm 
        show={showConfirmModal}
        message="¿Agregar producto al carrito?"
        callbackOk={onAdd}
        callbackCancel={onCancel}
        title="Confirmar acción"
        textCancel="Cancelar"
        textOk="Aceptar"
      />
    </Container>
  )
}

export default ECItemDetail;
