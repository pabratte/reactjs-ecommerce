import React from 'react';
import { Container } from 'react-bootstrap';
import  ECItemCount  from './ECItemCount';
import  ECItemList  from './ECItemList';

function ECItemListContainer(props) {
  const onAdd = (name, count) => {
    console.log(`${count} ${name} added to cart`)
  }
  return (
    <Container>
        
        <p className="mt-3">Welcome again, {props.usename}!</p>
        
        <ECItemList />
    </Container>
  );
}

export default ECItemListContainer;
