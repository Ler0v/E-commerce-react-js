import React from 'react'
import Csgo from '../media/csgoskins.png'
import CartWidget from './CartWidget'



const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img className='img' src={Csgo}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="inicio">AK 47</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="sobre">M4A1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href='contact'>AWP</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <CartWidget />
        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar

