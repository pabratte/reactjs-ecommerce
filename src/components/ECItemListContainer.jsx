import React, {useEffect} from 'react'
import { Container, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import  ECItemList  from './ECItemList'
import { getItemsByCategory } from '../utils/API'
import { useParams } from "react-router-dom";

function ECItemListContainer() {
  const [items, setItems] = React.useState(undefined)
  const [errorMsg, setErrorMsg] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  
  let {categoryId} = useParams()

  useEffect(() => {
      setLoading(true)
      getItemsByCategory(categoryId).then(items => {
        setLoading(false)
        setItems(items)
      }).catch( err => {
        setLoading(false)
        setItems(null)
        setErrorMsg(err)
      })
  }, [categoryId])
  
  return (
    <Container style={{padding: 0}}>
      { loading && <Alert variant="info" className="mt-3"><FontAwesomeIcon className="fa-spin" icon={faSync} /><span className="m-2">Cargando...</span></Alert> }
      { !loading && !items && <Alert variant="danger" className="mt-3"><span className="m-2">An error ocurred: {errorMsg}</span></Alert> }
      { !loading && items && items.length === 0 && <Alert variant="info" className="mt-3"><span className="m-2">Parece que no hay nada en esta categoría...</span></Alert> }
      { !loading && items && <><h3 className="section-title">{items.title}</h3><ECItemList items={items.items} /></> }
    </Container>
  )
}

export default ECItemListContainer;
