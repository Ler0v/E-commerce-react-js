import React, { useState } from 'react'
import { CartContext } from './CartContext'

const CustomCartContext = ({children}) => {
    const [productosCarrito, setProductoCarrito] = useState([]);


    const addItem = (item,cantidad) => {
        const newProduct = {
            item,
            cantidad
        }
        setProductoCarrito([...productosCarrito, newProduct])

        const borrarItem = (itemId) =>{
            const listaActualizada = productosCarrito.filter(producto=>producto.item.id !== itemId)
            setProductosCarrito(listaActualizada);
          }
      
          const clear = () =>{
            setProductosCarrito([]);
        }
    }


  return (
    <CartContext.Provider value={{productosCarrito, addItem, borrarItem, clear, isInCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CustomCartContext