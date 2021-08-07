import React from 'react';
import { Container, Row } from 'react-bootstrap';
import  ECItemCount  from './ECItemCount';

function ECItemListContainer(props) {
  const onAdd = (name, count) => {
    console.log(`${count} ${name} added to cart`)
  }
  return (
    <Container>
        
        <p className="mt-3">Welcome again, {props.usename}!</p>
        
        <Row>
          <div className="col-3">
            <ECItemCount name="item #1" initial="1" stock="5" onAdd={onAdd}></ECItemCount>
          </div>
          <div className="col-3">
            <ECItemCount name="item #2" initial="1" stock="10" onAdd={onAdd}></ECItemCount>
          </div>
          <div className="col-3">
            <ECItemCount name="item #3" initial="1" stock="0" onAdd={onAdd}></ECItemCount>
          </div>
        </Row>
    </Container>
  );
}

export default ECItemListContainer;
