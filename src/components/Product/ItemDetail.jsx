import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

    const onAdd = (cantidadAgregada) => { 
        
        alert(`agregaste ${cantidadAgregada} al carrito`)

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
                <ItemCount stock={5} iniciador={1} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    </>

  )
}

export default ItemDetail