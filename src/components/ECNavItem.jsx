import Nav from 'react-bootstrap/Nav';

function ECNavItem(props) {
  return (
    <Nav.Item>
      <Nav.Link eventKey={props.title}>{props.title}</Nav.Link>
    </Nav.Item>
  );
}
  
export default ECNavItem;
  