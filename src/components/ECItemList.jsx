import React from 'react';
import { Row, Alert } from 'react-bootstrap';
import ECItem from './ECItem';


function ECItemList(props) {
    return (
        <Row>
            {props.items.map((item) => <ECItem key={item.id} item={item}></ECItem>)}
        </Row>
    );
}

export default ECItemList;
