import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';


import './Navbar.css'


function Nav2() {
  const navigate = useNavigate();

 
  const home =()=>{
    navigate('/home');

  }
  const contact =()=>{
    navigate('/contact');

  }
  return (
   <>
        {/* <ul className="navbar-nav ml-auto gap-2 blockquote Home11">
              <Link className="nav-item rounded Home1" to='/'>
                 <a className="nav-link active"   onClick={home}> 
                  <i className="bi bi-house-fill me-1" />
                  Home
                </a>
              </Link>
              <li className="nav-item ">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  
                >
                  <i className="bi bi-person-fill me-2 text-dark" />
                  Shop
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  
                >
                  <i className="bi bi-person-fill me-2" />
                  Blog
                </a>
              
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  
                >
                  <i className="bi bi-person-fill me-2" />
                  Profile
                </a>
              
              </li>
              <li>
                <a className="nav-link text-dark" aria-current="page" >
                  <i className="bi bi-house-fill me-1" />
                  CONTACT US
                </a>
              </li>
            </ul> */}


<ul className="navbar-nav gap-2 ">
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Green Grocer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Contact</a>
        </li>
      
      </ul>

   </>
  )
}

export default Nav2