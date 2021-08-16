import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, NavLink } from "react-router-dom";
function ECNavItem(props) {
  return (
    <BrowserRouter basename="/category">
      <Nav.Item>
        <NavLink to={props.categoryId} activeClassName="active">
          {props.name}
        </NavLink>
      </Nav.Item>
    </BrowserRouter>
  );
}
  
export default ECNavItem;
  