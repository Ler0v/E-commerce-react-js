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


  return (
    <CartContext.Provider value={{productosCarrito, addItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CustomCartContext