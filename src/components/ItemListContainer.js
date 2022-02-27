import React from 'react'

const ItemListContainer = () => {
  return (
    <div>
        <div className="card-group">
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Prod1</h5>
            <p className="card-text">infoprod</p>
            <button type="button" class="btn btn-danger">Danger</button>
            </div>
        </div>
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">prod2</h5>
            <p className="card-text">info prod</p>
            <button type="button" class="btn btn-danger">Danger</button>
            </div>
        </div>
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">infoprod</p>
            <button type="button" class="btn btn-danger">Danger</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ItemListContainer