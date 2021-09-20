import React from "react"
import { Row } from "react-bootstrap"
import ItemCard from "./ItemCard"

export default function ItemList({ items }) {
  return (
    <>
      <Row className="g-0">
        {items.map((item) => (
          <ItemCard key={item.id} item={item}></ItemCard>
        ))}
      </Row>
    </>
  )
}