import React, {useEffect} from 'react'
import { Container, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import  ECItemList  from './ECItemList'
import { getItems } from '../utils/MockAPI'
import { useLocation, useParams } from "react-router-dom";

function ECItemListContainer(props) {
  const [items, setItems] = React.useState(undefined)
  const [errorMsg, setErrorMsg] = React.useState('')
  
  const location = useLocation()
  const params = useParams()

  useEffect(() => {
      console.log("UE: Category is: "+ params.categoryId)
      getItems(params.categoryId).then(items => {
        console.log("Items are: ")
        console.log(items)
        setItems(items)
      }).catch( err => {
        setItems(null)
        setErrorMsg(err)
      })
  }, [params.categoryId])

  const onAdd = (name, count) => {
    console.log(`${count} ${name} added to cart`)
  }

  if(items === undefined){
      return (
        <Container>
          <Alert variant="info" className="mt-3"><FontAwesomeIcon className="fa-spin" icon={faSync} /><span className="m-2">Loading...</span></Alert>
        </Container>
      );
  }else if(items === null || items.length === 0){
      return (
        <Container>
          <Alert variant="danger" className="mt-3"><span className="m-2">An error ocurred: {errorMsg}</span></Alert>
        </Container>
      );
  }else if(items.length > 0) {
      return (
        <Container>
            <ECItemList items={items} onAdd={onAdd} />
        </Container>
      );
  }
}

export default ECItemListContainer;
