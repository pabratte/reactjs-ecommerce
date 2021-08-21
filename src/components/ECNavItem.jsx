import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
function ECNavItem({name, categoryId}) {
  return (
  
      <Nav.Item>
        <NavLink to={`/category/${categoryId}`}>
          {name}
        </NavLink>
      </Nav.Item>
    
  );
}
  
export default ECNavItem;
  