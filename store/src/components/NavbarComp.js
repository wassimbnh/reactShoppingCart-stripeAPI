import React, { useContext, useState } from 'react'
import { Button, Navbar, Modal } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import CartProduct from './CartProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavbarComp = () => {
  const cart = useContext(CartContext)
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
  }

  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url) // Forwarding user to Stripe
        }
      })
  }

  return (
    <>
      <Navbar expand="sm" fixed="top" className='bg-white'>
        <Navbar.Brand href="/" className='px-3'>
          EcoFit
          <img
            src={require("../assets/images/eco.png")}
            height="30"
            className="d-inline-block align-top ml-2"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className='px-3'>
          <Button variant="outline-secondary" className="rounded-pill mr-2 mx-2">
            Sign Up
          </Button>
          <Button variant="outline-secondary" className="rounded-pill" onClick={handleShow}>
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
             {productCount} Items
          </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="px-3">Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct) => (
                <CartProduct key={currentProduct.id} img={currentProduct.img} id={currentProduct.id} quantity={currentProduct.quantity} />
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)}$</h1>

              <Button variant="success" onClick={checkout}>
                Purchase items
              </Button>
            </>
          ) : (
            <h1>Your Cart is empty</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavbarComp
