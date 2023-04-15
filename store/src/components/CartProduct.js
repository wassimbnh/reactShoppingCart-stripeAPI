import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { getProductData } from '../productStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

const CartProduct = (props) => {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <div className="cart-product" >
                <img src={require(`../assets/images/${productData.img}`)} alt={productData.title} />
                <div className="product-info">
                    <h3>{productData.title}</h3>
                    <div className="quantity-controls">
                        <Button variant='outline-primary' className='btn-circle' onClick={() => cart.addOneToCart(productData.id)}>+</Button>
                        <p>{quantity}</p>
                        <Button variant='outline-primary' className='btn-circle' onClick={() => cart.removeOneFromCart(productData.id)}>-</Button>
                    </div>
                    <p className="price">${(quantity * productData.price).toFixed(2)}</p>
                </div>
                <div className="remove-button">
                    <Button variant='danger' size='sm' onClick={() => cart.deleteFromCart(id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartProduct
