import React from 'react';
import { Row } from 'react-bootstrap';
import ECItem from './ECItem';


function ECItemList({items}) {
    return (
        <Row>
            {items.map((item) => <ECItem key={item.id} item={item}></ECItem>)}
        </Row>
    );
}

export default ECItemList;
