import React, { useContext, useState } from 'react'
import {Button, Container, Navbar, Modal} from 'react-bootstrap'
import { CartContext } from '../CartContext'
import CartProduct from './CartProduct'


const NavbarComp = () => {
  const cart = useContext(CartContext)
  const [ show, setShow] = useState(false);

  const handlelose = ()=>{
    setShow(false)
  }

  const handleShow = ()=>{
    setShow(true)
  }

  const productCount = cart.items.reduce((sum,product) => sum+ product.quantity, 0)

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cart.items})
    }).then((response) => {
        return response.json();
    }).then((response) => {
        if(response.url) {
            window.location.assign(response.url); // Forwarding user to Stripe
        }
    });
}
    
  return (
    <>
      <Navbar expand='sm' >
        <Navbar.Brand href="/">MyStore</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow}>Cart {productCount} items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handlelose} >
      <Modal.Header closeButton>
        <Modal.Title className='px-3'>Shopping Cart</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          {
            productCount>0 ? 
              <>
              <p>Items in your cart:</p>
              {
                cart.items.map((currentProduct) => (
                  <CartProduct key={currentProduct.id} img={currentProduct.img}
                   id={currentProduct.id} quantity={currentProduct.quantity} />
                ))
              }
              <h1>Total: {cart.getTotalCost().toFixed(2)}$</h1>

              <Button variant='success' onClick={checkout}>Purchase items</Button>
              </>
            :
            <h1>Your Cart is empty</h1>

          }
        </Modal.Body>
      </Modal> 
    </>
  )
}

export default NavbarComp
