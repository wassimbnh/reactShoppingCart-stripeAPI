import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { getProductData } from '../productStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartProduct = (props) => {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <img src={require(`../assets/images/${productData.img}`)} style={{ marginRight: '20px', width: '120px', height: '120px', borderRadius: '10px' }} alt={productData.title} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3>{productData.title}</h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', padding: '5px' }}>
            <Button variant='outline-primary' className='btn-circle' style={{ marginRight: '10px', marginLeft: '5px' }} onClick={()=> cart.addOneToCart(productData.id)}>+</Button>
            <p style={{ margin: '0 10px' }}>{quantity}</p>
            <Button variant='outline-primary' className='btn-circle' style={{ marginLeft: '10px', marginRight: '5px' }} onClick={()=>cart.removeOneFromCart(productData.id)}>-</Button>
          </div>
          <p>${(quantity * productData.price).toFixed(2)}</p>
        </div>
        <div style={{ position: 'absolute', top: '5px', right: '5px' }}>
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
