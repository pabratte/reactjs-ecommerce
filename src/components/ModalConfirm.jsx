import { Button, Modal } from "react-bootstrap"

export default function ModalConfirm({
  show,
  message,
  callbackOk,
  callbackCancel,
  title = "Confirm action",
  textCancel = "Cancel",
  textOk = "Ok",
}) {
  return (
    <Modal show={show} onHide={callbackCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button className="button-secondary" onClick={callbackCancel}>
          {textCancel}
        </Button>
        <Button className="button-primary" onClick={callbackOk}>
          {textOk}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
