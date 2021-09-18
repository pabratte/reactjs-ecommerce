import React, { useState } from 'react';
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function ECItemCount({ onAdd, initial=1, stock=10}) {
    const [count, setCount] = useState(parseInt(initial, 10));

    const minusDisabled = () => count <= 1;
    const plusDisabled = () => count >= stock;
    const addDisabled = () => count > stock;

    return (
        <Container className="item-count">
            <Row className="mb-2">
                <ButtonGroup className="m-0 p-0" size="sm">
                    <Button onClick={() => setCount(count - 1)} className="col-md-2 button-primary minus-button" disabled={minusDisabled()}><FontAwesomeIcon icon={faMinus} /></Button>{' '}
                    <Button variant="outline-primary" className="col-10 count" disabled>{count}</Button>{' '}
                    <Button onClick={() => setCount(count + 1)} className="col-md-2 button-primary plus-button" disabled={plusDisabled()}><FontAwesomeIcon icon={faPlus} /></Button>{' '}
                </ButtonGroup>
            </Row>
            <Row>
                <Button onClick={ ()=>onAdd(count) } disabled={addDisabled()} variant="primary" size="lg" className="button-primary">Agregar al carrito</Button>{' '}
            </Row>
        </Container>
  );
}

export default ECItemCount;
