import React from 'react';
import { Row } from 'react-bootstrap';
import ItemCard from './ItemCard';


function ECItemList({items}) {
    return (
        <>
        <Row>
            {items.map((item) => <ItemCard key={item.id} item={item}></ItemCard>)}
        </Row>
        </>
    );
}

export default ECItemList;
