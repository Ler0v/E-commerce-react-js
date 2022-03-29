import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

    const carritoContext = useContext(CartContext)
    
    
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const [stockProducto, setStockProducto] = useState(5)

    const onAdd = (cantidadAgregada) => { 
        
        setCantidadAgregada(cantidadAgregada)
        setStockProducto(stockProducto - cantidadAgregada)
        carritoContext.addItem(item, cantidadAgregada)

    }
    

  return (
    <>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.imagen} className="img-fluid rounded-start" alt="nache"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><small className="text-muted">Precio: {item.price}$</small></p>
                </div>
                <ItemCount stock={stockProducto} iniciador={1} onAdd={onAdd} cantidadAgregada={cantidadAgregada} setCantidadAgregada={setCantidadAgregada}/>
                </div>
            </div>
        </div>
    </>

  )
}

export default ItemDetail