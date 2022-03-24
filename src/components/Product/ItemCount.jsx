import React from 'react'
import { useState } from 'react'

const ItemCount = (props) => {
    let {stock,iniciador,onAdd} = props
    const [inicial, setinicial] = useState(iniciador)
  return (
  <div className="counter row">
        <button className='btn col-lg-3 col-md-3' onClick={()=>{
            if(inicial == 5){
                alert("La cantidad no puede ser mayor a 5");
            }else{
                setinicial(inicial +1);
            }
        }}>+</button>
        <div className='btn counterDisplay col-lg-6 col-md-6'><span>{inicial}</span></div>
        <button className='btn col-lg-3 col-md-3' onClick={()=>{
                if(inicial == 1){
                  alert("No puede no llevar productos");
                }else{
                  setinicial(inicial - 1); 
                }
        }}>-</button>
        <button className='btn btn-primary' onClick={ () =>{
          onAdd(inicial)
        }}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount