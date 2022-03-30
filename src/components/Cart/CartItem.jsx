import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartItem = ({productoCarrito}) => {

const carritoContext = useContext(CartContext);

  return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <tr>
                <td><img src={productoCarrito.item.imagen} style={{height:"200px"}} alt="Imagen Producto"/></td>
                <td><p>{productoCarrito.item.nombre}</p></td>
                <td><p>{productoCarrito.cantidad}</p></td>
                <td><p>{productoCarrito.item.precio}</p></td>
                <td><p>{productoCarrito.item.precio*productoCarrito.cantidad}</p></td>
                <button onClick={()=>carritoContext.borrarItem(productoCarrito.item.id)}>Eliminar Producto</button>
             </tr>
        </div>
    )
}

export default CartItem