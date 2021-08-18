import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
function ECNavItem(props) {
  return (
  
      <Nav.Item>
        <NavLink to={`/category/${props.categoryId}`}>
          {props.name}
        </NavLink>
      </Nav.Item>
    
  );
}
  
export default ECNavItem;
  