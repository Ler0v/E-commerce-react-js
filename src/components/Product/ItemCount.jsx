import React from 'react'
import { useState } from 'react' 
import { useNavigate } from 'react-router-dom'

const ItemCount = (props) => {
    let {stock,iniciador,onAdd, cantidadAgregada, setCantidadAgregada} = props
    
    const reset = () => {
      setCantidadAgregada(iniciador)
    }

    const navigate = useNavigate();


  return (
  <div className="counter row">
        <p>Stock Disponible: {stock}</p>
        <button className='btn col-lg-3 col-md-3' onClick={()=>{
            if(cantidadAgregada == 5){
                alert("La cantidad no puede ser mayor a 5");
            }else{
                setCantidadAgregada(cantidadAgregada +1);
            }
        }}>+</button>
        <div className='btn counterDisplay col-lg-6 col-md-6'><span>{cantidadAgregada}</span></div>
        <button className='btn col-lg-3 col-md-3' onClick={()=>{
                if(cantidadAgregada == 1){
                  alert("No puede no llevar productos");
                }else{
                  setCantidadAgregada(cantidadAgregada - 1); 
                }
        }}>-</button>
        <button className='btn btn-primary' onClick={()=>{onAdd(cantidadAgregada);reset()}} >Agregar al carrito</button>
         <button className="btn btn-primary" onClick={ () => {
            navigate(`/cart`)
          }}>Finalizar compra</button>             
    </div>
  )
}

export default ItemCount