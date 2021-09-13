import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
function ECNavItem({name, categoryId}) {
  return (
  
      <Nav.Link>
        <NavLink to={`/category/${categoryId}`}>
          {name}
        </NavLink>
      </Nav.Link>
    
  );
}
  
export default ECNavItem;
  