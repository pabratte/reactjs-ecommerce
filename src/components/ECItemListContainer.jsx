import React from 'react';
import { Container } from 'react-bootstrap';


function ECItemListContainer(props) {
  return (
    <Container>
        <p class="mt-3">Welcome again, {props.usename}!</p>
    </Container>
  );
}

export default ECItemListContainer;
