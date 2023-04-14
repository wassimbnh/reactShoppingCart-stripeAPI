import React from 'react'
import { Card,Button,Form, Row, Col } from 'react-bootstrap'
import "../App.css"

const ProductCart = (props) => {
    const product = props.product;
  return (
    <div className="product-card">
              <Card.Img variant="top" src={ require(`../assets/images/${product.img}`) } alt={product.title} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant='primary'>Add to Cart</Button>
        </Card.Body>
      
    </div>
  )
}

export default ProductCart
