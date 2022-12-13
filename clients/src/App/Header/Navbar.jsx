import React from 'react'
import Nav2 from './Nav2'
import Nav3 from './Nav3'

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top navFull">

        <a className="navbar-brand" href="#" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

           <ul className="navbar-nav ml-auto blockquote" >  {/*id='box11' */}
            <li className="nav-item dropdown rounded category ">
        

              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textAlign: 'right' }}
              >

                CATEGORY
              </a>

              <ul
                className="dropdown-menu dropdown-menu-center"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>    <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>    <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>    <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>    <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

              </ul>
            </li>
          </ul>

          <Nav2 />
          <Nav3 />
        </div>

      </nav>

    </>

  )
}

export default Navbar