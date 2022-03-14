import React, { useState } from 'react'

const AddCart = (props) => {
    const  cart = props
    const [carrito, addCarrito] = useState(0)
  return (
    <div>
        <button onClick={() => {
          if (carrito == 0){
            addCarrito(carrito + 1)
          }
        }}> sumar al carrito </button>
    </div>
  )
}

export default AddCart