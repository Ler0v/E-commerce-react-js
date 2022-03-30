import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from './CartItem';


const Cart = () => {

    const carritoContext = useContext(CartContext);
    const productosCarrito = carritoContext.productosCarrito
    console.log('Productos Carrito', carritoContext.productosCarrito)



  return (
      <div>
           <table className="table">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productosCarrito.map(producto => (
                        <CartItem key={producto.item.id} productoCarrito={producto}/>
                        ))
                    }
                </tbody>
                <button onClick={carritoContext.clear}>Vaciar Carrito</button>
            </table>
      </div>
       
  )
}

export default Cart