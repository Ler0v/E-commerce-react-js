import React from 'react'
import Carrito from '../media/carrito.png'

const CartWidget = () => {
  return (
    <div>
        <img src={Carrito} className="carrito" />
    </div>
  )
}

export default CartWidget