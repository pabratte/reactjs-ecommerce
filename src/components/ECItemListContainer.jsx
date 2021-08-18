import React, {useEffect} from 'react'
import { Container, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import  ECItemList  from './ECItemList'
import { getItems } from '../utils/MockAPI'
import { useParams } from "react-router-dom";

function ECItemListContainer(props) {
  const [items, setItems] = React.useState(undefined)
  const [errorMsg, setErrorMsg] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  
  const params = useParams()

  useEffect(() => {
      setLoading(true)
      getItems(params.categoryId).then(items => {
        setLoading(false)
        setItems(items)
      }).catch( err => {
        setLoading(false)
        setItems(null)
        setErrorMsg(err)
      })
  }, [params.categoryId])

  const onAdd = (name, count) => {
    console.log(`${count} ${name} added to cart`)
  }

  
  return (
    <Container>
      { loading && <Alert variant="info" className="mt-3"><FontAwesomeIcon className="fa-spin" icon={faSync} /><span className="m-2">Loading...</span></Alert> }
      { !loading && !items && <Alert variant="danger" className="mt-3"><span className="m-2">An error ocurred: {errorMsg}</span></Alert> }
      { !loading && items && <ECItemList items={items} onAdd={onAdd} /> }
    </Container>
  )
}

export default ECItemListContainer;
