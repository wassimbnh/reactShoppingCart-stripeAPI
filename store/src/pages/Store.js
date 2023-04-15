import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { productsArray } from '../productStore'
import ProductCart from '../components/ProductCart'

const Store = () => {
  return (
    <>
      <h1 align="center" className='p-4'> Welcome to the store</h1>
      <Row xs={1} md={3} className='g-4'>
        {productsArray.map((prod) =>(
            <Col align="center" key={prod.id}>
            <ProductCart product={prod}/>
        </Col>
        ))}
        
      </Row>
    </>
  )
}

export default Store
