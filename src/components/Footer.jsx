import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Container, Col, Row } from "react-bootstrap"

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="col-left">Mimitos - Córdoba 195 - San Francisco</Col>
          <Col className="col-right">
            <a
              className="social-icon"
              href="https://wa.me/+5493564505913"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              className="social-icon"
              href="https://www.facebook.com/mimitossf"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className="social-icon"
              href="https://www.instagram.com/mimitossanfco"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
