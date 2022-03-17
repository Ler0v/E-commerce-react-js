import React from 'react';

const ItemDetail = (props) => {
    const {detail} = props;
  return (
    <>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={detail.imagen} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{detail.nombre}</h5>
                    <p className="card-text">{detail.descripcion}</p>
                    <p className="card-text"><small className="text-muted">Precio: {detail.precio}$</small></p>
                </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default ItemDetail