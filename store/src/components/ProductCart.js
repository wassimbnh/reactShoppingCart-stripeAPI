import React from 'react'
import { Card,Button,Form, Row, Col } from 'react-bootstrap'
import "../App.css"
import { CartContext } from '../CartContext'
import { useContext } from 'react'


const ProductCart = (props) => {
    const product = props.product;
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items)
  return (
    <div className="product-card">
              <Card.Img variant="top" src={ require(`../assets/images/${product.img}`) } alt={product.title} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>             
            {
                productQuantity>0 ?
                <>
                <Form as={Row}>
                    <Form.Label column='true' sm='6'>In Cart: {productQuantity}</Form.Label>
                    <Col>
                        <Button sm='6' className='mx-2' onClick={()=> cart.addOneToCart(product.id)}>+</Button>
                        <Button sm='6' className='mx-2' onClick={()=>cart.removeOneFromCart(product.id)}>-</Button>
                    </Col>
                </Form>
                <Button variant='danger' className='m-2' onClick={()=>cart.deleteFromCart(product.id)}>Remove from Cart</Button>
                </>:
                <Button variant='primary' onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
            }
        </Card.Body>
      
    </div>
  )
}

export default ProductCart
