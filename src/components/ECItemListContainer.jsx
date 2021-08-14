import React, {useEffect} from 'react'
import { Container, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import  ECItemList  from './ECItemList'
import ECItemDetailContainer from './ECItemDetailContainer'
import { getItems } from '../utils/MockAPI'

function ECItemListContainer(props) {
  const [items, setItems] = React.useState(undefined)
  const [errorMsg, setErrorMsg] = React.useState('')

  useEffect(() => {
      getItems().then(items => {
        setItems(items)
      }).catch( err => {
        setItems(null)
        setErrorMsg(err)
      })
  })

  const onAdd = (name, count) => {
    console.log(`${count} ${name} added to cart`)
  }
  return (
    <Container>
      <ECItemDetailContainer itemId="1"></ECItemDetailContainer>
    </Container>
  )
  /*
  if(items === undefined){
      return (
        <Container>
          <Alert variant="info" className="mt-3"><FontAwesomeIcon className="fa-spin" icon={faSync} /><span className="m-2">Loading...</span></Alert>
        </Container>
      );
  }else if(items === null){
      return (
        <Container>
          <Alert variant="danger" className="mt-3"><span className="m-2">An error ocurred: {errorMsg}</span></Alert>
        </Container>
      );
  }else if(items.length > 0) {
      return (
        <Container>
            <p className="mt-3">Welcome again, {props.usename}!</p>
            <ECItemList items={items} onAdd={onAdd} />
        </Container>
      );
  }
  */
}

export default ECItemListContainer;
