import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'


function Nav2() {
  return (
   <>
        <ul className="navbar-nav ml-auto gap-2 blockquote Home11">
              <li className="nav-item rounded Home1">
              <Link to="/">
                <a className="nav-link active" aria-current="page">
                  <i className="bi bi-house-fill me-1" />
                  Home
                </a>
                </Link>
              </li>
              <li className="nav-item dropdown rounded">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill me-2 text-dark" />
                  Shop
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
              <li className="nav-item dropdown rounded">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill me-2" />
                  Blog
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
              <li className="nav-item dropdown rounded">
                <a
                  className="nav-link dropdown-toggle text-dark"
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
              <li className="nav-item rounded">
                <a className="nav-link text-dark" aria-current="page" href="#">
                  <i className="bi bi-house-fill me-1" />
                  CONTACT US
                </a>
              </li>
            </ul>

   </>
  )
}

export default Nav2