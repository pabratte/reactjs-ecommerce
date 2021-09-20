import React, { useState, useEffect, useContext } from 'react'
import NavItem from './NavItem'
import CartWidget from './CartWidget'
import { Navbar as BootstrapNavbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavbarBrand } from 'react-bootstrap'
import { getCategories } from '../utils/API'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../utils/CartProvider'

export default function NavBar() {
  const [categories, setCategories] = useState([])
  const cart = useContext(CartContext)

  useEffect(() => {
    getCategories().then(cats => {
      setCategories(cats)
    })
  }, [])

  return (
    <>
      <BootstrapNavbar expand="lg" className="mimitos-navbar">
        <Container className="navbar-container">
          <NavbarBrand>
            <NavLink to="/">
              mimitos
            </NavLink>
          </NavbarBrand>
          <Nav className="me-auto">
            {categories.map((category) => <NavItem key={category.id} categoryId={category.id} name={category.name}></NavItem>)}
          </Nav>
          {cart.getTotalItems() > 0 && <CartWidget />}

        </Container>
      </BootstrapNavbar>
    </>
  )
}
