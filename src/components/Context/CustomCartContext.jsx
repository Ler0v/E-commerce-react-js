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
      }

    const borrarItem = (itemId) => {
      const listaActualizada = productosCarrito.filter(producto =>producto.item.id !== itemId)
      setProductoCarrito(listaActualizada)
    }
      
    const clear = () =>{
      setProductoCarrito([]);
    }

    const isInCart = (id) =>{
      return productosCarrito.some((producto)=>producto.item.id === id)
    }
    
    const totalQty = ()=> productosCarrito.reduce((contador,item)=>contador + item.cantidad,0);

  return (
    <CartContext.Provider value={{productosCarrito, addItem, borrarItem,  clear, isInCart, totalQty}}>
      {children}
    </CartContext.Provider>
  )
}

export default CustomCartContext