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
                <Link className="nav-link active" to="/" > Inicio </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/categoria/ak"> AKS </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/categoria/m4"> M4</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/categoria/awp">AWP</Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="nav-link active" to="/cart"> <CartWidget /> </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

