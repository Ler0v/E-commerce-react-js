import React from 'react'
import Carrito from '../Media/carrito.png'

const CartWidget = () => {
  return (
    <div>
        <img src={Carrito} className="carrito" />
    </div>
  )
}

export default CartWidget