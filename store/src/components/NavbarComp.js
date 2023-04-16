import React, { useContext, useState } from 'react'
import { Button, Navbar, Modal, Dropdown, } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import CartProduct from './CartProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { BiLogOut} from 'react-icons/bi'
import {CgProfile}from 'react-icons/cg'

const NavbarComp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const cart = useContext(CartContext)
  const [show, setShow] = useState(false)
  const [showProfile, setShowProfile] = useState(false);

  



  const handleProfileToggle = () => {
    setShowProfile(!showProfile);
  };

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
        <div className="d-flex align-items-center px-3 ">
            {isLoggedIn ? (
              <Dropdown className='px-3'>
                <Dropdown.Toggle variant="link" id="dropdown-basic" className="p-0">
                  <img
                    class="rounded-circle"
                    height="30"
                    className="d-inline-block align-top mx-2 rounded-circle "
                    alt="avatar1"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                    onClick={handleProfileToggle}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu show={showProfile}>
                  <Dropdown.Item href="#/action-1"><CgProfile />Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setIsLoggedIn(false)}><BiLogOut className='mr-1'/>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button variant="outline-secondary" className="rounded-pill mr-2 mx-2">
                Sign Up
              </Button>
            )}

            <Button variant="outline-secondary" className="rounded-pill " onClick={handleShow}>
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
