import React from 'react'
import Carrito from '../Media/carrito.png'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
  const {totalQty,productosCarrito} = useContext(CartContext);
  return (
    <div className='carritoCont'>
      <img src={Carrito} className="carrito" />
      <div className='carritoQty'>{productosCarrito.length !==0? <span>{totalQty()}</span>:"0"}</div>
    </div>
    
  )
}

export default CartWidget










