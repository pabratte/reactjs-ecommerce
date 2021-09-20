import React, { useEffect } from "react"
import { Alert } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSync } from "@fortawesome/free-solid-svg-icons"
import ItemList from "./ItemList"
import { getItemsByCategory } from "../utils/API"
import { useParams } from "react-router-dom"

export default function ItemListContainer() {
  const [items, setItems] = React.useState(undefined)
  const [errorMsg, setErrorMsg] = React.useState("")
  const [loading, setLoading] = React.useState(true)

  let { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    getItemsByCategory(categoryId)
      .then((items) => {
        setLoading(false)
        setItems(items)
      })
      .catch((err) => {
        setLoading(false)
        setItems(null)
        setErrorMsg(err)
      })
  }, [categoryId])

  return (
    <>
      {loading && (
        <Alert variant="info" className="mt-3">
          <FontAwesomeIcon className="fa-spin" icon={faSync} />
          <span className="m-2">Cargando...</span>
        </Alert>
      )}
      {!loading && !items && (
        <Alert variant="danger" className="mt-3">
          <span className="m-2">An error ocurred: {errorMsg}</span>
        </Alert>
      )}
      {!loading && items && items.length === 0 && (
        <Alert variant="info" className="mt-3">
          <span className="m-2">
            Parece que no hay nada en esta categoría...
          </span>
        </Alert>
      )}
      {!loading && items && (
        <>
          <h3 className="section-title">{items.title}</h3>
          <ItemList items={items.items} />
        </>
      )}
    </>
  )
}
