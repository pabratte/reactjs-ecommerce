import React, {useEffect} from 'react'
import { Container, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import  ECItemList  from './ECItemList'
import  ECItemDetail  from './ECItemDetail'
import { getItem } from '../utils/MockAPI'

function ECItemDetailContainer(props) {
    const [item, setItem] = React.useState(undefined)
    const [errorMsg, setErrorMsg] = React.useState('')

    useEffect(() => {
        getItem(props.itemId).then(item => {
            setItem(item)
        }).catch( err => {
            setItem(null)
            setErrorMsg(err)
        })
    })


    if(item === undefined){
        return (
          <Container>
            <Alert variant="info" className="mt-3"><FontAwesomeIcon className="fa-spin" icon={faSync} /><span className="m-2">Loading...</span></Alert>
          </Container>
        )
    }else if(item === null){
        return (
          <Container>
            <Alert variant="danger" className="mt-3"><span className="m-2">An error ocurred: {errorMsg}</span></Alert>
          </Container>
        )
    }else {
        return (
          <Container>
            <ECItemDetail item={item}></ECItemDetail>
          </Container>
        )
    }
}

export default ECItemDetailContainer;
