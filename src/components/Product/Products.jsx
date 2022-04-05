import React from 'react'
import { useNavigate } from 'react-router-dom';

const Products = ({item}) => {

    const navigate = useNavigate();

  return (
    <div className='col-lg-4 col-md-6 p-3'>
        <div className="card">
          <img src={item.imagen} className="imgProd" />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.descripcion}</p>
            <p className="card-text">USD {item.price}</p>
            <button className="btn btn-primary" onClick={ () => {
              navigate(`/item/${item.id}`)
            }}>Ver mas</button>          
          </div>
        </div>
    </div>
  )
}

export default Products







