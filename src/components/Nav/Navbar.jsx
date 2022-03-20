import React from 'react'
import Csgo from '../Media/csgoskins.png'
import CartWidget from '../Cart/CartWidget'
import { Link } from 'react-router-dom'



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
            <Link className="nav-link active" to="inicio" > Inicio </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="sobre"> Sobre Nosotros </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="contact"> Contacto</Link>
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

