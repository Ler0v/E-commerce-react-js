import React from 'react'
import ItemCount from './ItemCount'

const Products = (props) => {
    let {imagen, titulo, descripcion, comprar} = props
  return (
    <div className='col-lg-4 col-md-6 p-3'>
        <div className="card">
          <img src={imagen} className="imgProd" />
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <a href="#" className="btn btn-primary">{comprar}</a>          
          </div>
          <div>
            <ItemCount stock={5} iniciador={1}/>
          </div>
        </div>
    </div>
  )
}

export default Products