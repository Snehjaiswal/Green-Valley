import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from "react-use-cart";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  const {
    // isEmpty,
    // totalUniqueItems,
    // items,
    // totalItems,
    cartTotal,
    // updateItemQuantity,
    // removeItem,
    // emptyCart
  } = useCart();


  const navigate = useNavigate();
  const roleid = localStorage.getItem('roleid')
  console.log(roleid);

  const home = () => {
    navigate('/home');

  }
  const shop = () => {
    navigate('/shop');

  }
  const grocer = () => {
    navigate('/grocer');

  }
  const blogs = () => {
    navigate('/blog');

  }
  const contact = () => {
    navigate('/contact');

  }
  const profilePage = () => {
    if (roleid == 1) {
      navigate('/userprofile');
    } else if (roleid == 2) {
      console.log("dsbcudv");
      navigate('/sellerProfile');
    } else if (roleid == 3) {
      navigate('/adminprofile');
    } else {
      navigate('/login');
    }
  }


  // Local Storeage 
  const count = localStorage.getItem('count')
  // const prize = localStorage.getItem('prize')




  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">GreenValley</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={home}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={shop}>Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={grocer}>Green Grocer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={blogs}>Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={contact} >Contact</a>
              </li>



            </ul>


            <form classname="d-flex ">
              {/* <input classname="form-control ms-auto" type="search" placeholder="Search" aria-label="Search" />
              <button classname="btn btn-outline" type="submit">Search</button> */}
              <div classname="header-profile">
          


              <div className="dropdown">
                <button className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                </button>
                <div className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Dashboard</a>
                  <a className="dropdown-item" href="#">Feedback</a>
                  <a className="dropdown-item" href="#">Setting</a>
                  {/* <a className="dropdown-item" href="#">Setting</a> */}
                  <hr />
                  <a className="dropdown-item" href="#">Logout</a>
                </div>
              </div>
              </div>
            </form>

          </div>
        </div>
      </nav>




      {/* <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  )
}

export default Header