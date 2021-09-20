import { useContext, useState } from "react"
import { Alert, Button, Col, Row } from "react-bootstrap"
import { CartContext } from "../utils/CartProvider"
import { useHistory } from "react-router-dom"
import CartItem from "./CartItem"
import ModalConfirm from "./ModalConfirm"

export default function Cart() {
  const cart = useContext(CartContext)
  const history = useHistory()
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [itemToRemove, setItemToRemove] = useState(null)

  const onCancel = () => {
    setShowConfirmModal(false)
  }

  const onShowRemoveModal = (itemId) => {
    setItemToRemove(itemId)
    setShowConfirmModal(true)
  }

  const checkout = () => {
    history.push("/profile")
  }

  const onRemove = () => {
    cart.removeItem(itemToRemove)
    setShowConfirmModal(false)
  }

  const goToHome = () => {
    history.push("/")
  }

  return (
    <>
      <h3 className="section-title">Tu compra</h3>
      {cart.isEmpty() && (
        <Alert variant="secondary" className="cart-empty">
          <div>No hay nada en el carrito</div>
          <br />
          <Button className="button-primary" onClick={goToHome}>
            Ir a la página principal
          </Button>
        </Alert>
      )}
      {!cart.isEmpty() && (
        <>
          {cart.items.map((item) => (
            <CartItem
              key={item.item.id}
              item={item.item}
              quantity={item.quantity}
              onRemove={onShowRemoveModal}
            />
          ))}
          <Row>
            <Col className="d-flex justify-content-end cart-table-total">
              {`Total: $${cart.getTotalPrice()}`}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="d-flex justify-content-end">
              <Button
                variant="primary"
                onClick={checkout}
                className="btn-lg button-primary"
              >
                Finalizar
              </Button>
            </Col>
          </Row>
        </>
      )}

      <ModalConfirm
        show={showConfirmModal}
        message="¿Quitar producto al carrito?"
        callbackOk={onRemove}
        callbackCancel={onCancel}
        title="Confirmar acción"
        textCancel="Cancelar"
        textOk="Aceptar"
      />
    </>
  )
}
