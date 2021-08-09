import React, { useEffect } from 'react';
import { Row, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import ECItem from './ECItem';

const items_data = [
    {
        id: 1,
        title: 'Orange',
        description: 'An Orange T Shirt',
        price: 19.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/JcvzGC-orange-t-shirt-image.png'
    },
    {
        id: 2,
        title: 'Red',
        description: 'A Red T Shirt',
        price: 19.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/Xfp8Xd-red-t-shirt-picture.png'
    },
    {
        id: 3,
        title: 'Green',
        description: 'A Green T Shirt',
        price: 19.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/BJCV0J-green-t-shirt-best-picture.png'
    },
    {
        id: 4,
        title: 'Black',
        description: 'A Black T Shirt',
        price: 29.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/sYHTQX-t-shirt-flexible-transparent-picture.png'
    },
    {
        id: 5,
        title: 'Blue',
        description: 'A Blue T Shirt',
        price: 19.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/mD03wQ-women-blue-t-shirt-icon-clipart.png'
    },
    {
        id: 6,
        title: 'White',
        description: 'A White T Shirt',
        price: 9.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/uWGRvG-man-t-shirt-clipart-photo.png'
    },
]

function ECItemList() {
    const [items, setItems] = React.useState(undefined);
    const [errorMsg, setErrorMsg] = React.useState('');

    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items_data)
                //reject("Network error")
            }, 2000);
        })
        getItems.then(items => {
            setItems(items)
        }).catch( err => {
            console.log("catch")
            setItems(null)
            setErrorMsg(err)
        })
    })

    if(items === undefined){
        return (
            <Alert variant="info"><FontAwesomeIcon className="fa-spin" icon={faSync} /><span className="m-2">Loading...</span></Alert>
        );
    }else if(errorMsg !== ''){
        return (
            <Alert variant="danger"><span className="m-2">An error ocurred: {errorMsg}</span></Alert>
        );
    }else if(items.length > 0) {
        return (
            <Row>
                {items.map((item) => <ECItem key={item.id} item={item}></ECItem>)}
            </Row>
        );
    }
}

export default ECItemList;
