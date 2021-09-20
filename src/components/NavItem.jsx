import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

export default function NavItem({ name, categoryId }) {
  return (
    <Nav.Link>
      <NavLink to={`/category/${categoryId}`}>{name}</NavLink>
    </Nav.Link>
  )
}
