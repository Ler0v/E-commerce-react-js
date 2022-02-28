import React from 'react'

const Productos = (props) => {
    let {titulo, descripcion, comprar} = props
  return (
    <div className='col-lg-4 col-md-6 p-3'>
        <div className="card">
          <img src="..." className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <a href="#" className="btn btn-primary">{comprar}</a>
          </div>
        </div>
    </div>
    
    
    
  )
}

export default Productos