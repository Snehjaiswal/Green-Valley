import React from 'react'
import './Navbar.css'

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
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
            <ul className="navbar-nav ml-auto  blockquote">
              <li className="nav-item dropdown rounded category ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="categories_title" />
                 
                        Category
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

            <ul className="navbar-nav ms-md-auto gap-2 blockquote">
              <li className="nav-item rounded">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="bi bi-house-fill me-1" />
                  Home
                </a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link" href="#">
                  <i className="bi bi-people-fill me-2" />
                  About
                </a>
              </li>
              <li className="nav-item rounded ">
                <a className="nav-link" href="#">
                  <i className="bi bi-telephone-fill me-2" />
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown rounded">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill me-2" />
                  Profile
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
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
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>

  )
}

export default Navbar