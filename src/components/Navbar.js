import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to='/' >
                <img src='./media/twitch.jpg' width={50} />
              </Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to='/' >Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to='sobre' >about us</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to='contact' >contact</Link>
                  </li>
              </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar