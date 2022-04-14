import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'


const ItemDetail = ({item}) => {

    const carritoContext = useContext(CartContext)
    
    
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const [stockProducto, setStockProducto] = useState(item.stock)

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
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.descripcion}</p>
                    <p className="card-text"><small className="text-muted">Precio: {item.price}$</small></p>
                </div>
                {!carritoContext.isInCart(item.id) ?<ItemCount stock={item.stock} iniciador={1} onAdd={onAdd} cantidadAgregada={cantidadAgregada} setCantidadAgregada={setCantidadAgregada}/> :'Producto ya agregado al carrito!'}
                </div>
            </div>
        </div>
    </>

  )
}

export default ItemDetail