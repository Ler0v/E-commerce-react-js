import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from './CartItem';


const Cart = () => {

    const carritoContext = useContext(CartContext);
    console.log('Productos Carrito', carritoContext.productosCarrito)



  return (
      <div>
    
      </div>
       
  )
}

export default Cart