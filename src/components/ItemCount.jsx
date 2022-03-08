import React from 'react'
import { useState } from 'react'

const ItemCount = (props) => {
    let {stock} = props
    const [inicial, setInicial] = useState(1)
  return (
  <div className="counter row">
        <button className='btn col-lg-3 col-md-3' onClick={()=>{
            if(inicial == 5){
                alert("La cantidad no puede ser mayor a 5");
            }else{
                setInicial(inicial +1);
            }
        }}>+</button>
        <div className='btn counterDisplay col-lg-6 col-md-6'><span>{inicial}</span></div>
        <button className='btn col-lg-3 col-md-3' onClick={()=>{
                if(inicial == 1){
                  alert("No puede no llevar productos");
                }else{
                  setInicial(inicial - 1); 
                }
        }}>-</button>
    </div>
  )
}

export default ItemCount