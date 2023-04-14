import React, { useState } from 'react'
import {Button, Container, Navbar, Modal} from 'react-bootstrap'

const NavbarComp = () => {
  const [ show, setShow] = useState(false);

  const handlelose = ()=>{
    setShow(false)
  }

  const handleShow = ()=>{
    setShow(true)
  }
  return (
    <>
      <Navbar expand='sm'>
        <Navbar.Brand href="/">MyStore</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow}>Cart 0 items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handlelose} >
      <Modal.Header closeButton></Modal.Header>
      </Modal> 
    </>
  )
}

export default NavbarComp
