import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from "react-use-cart";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';



function Header() {
  const {
    // isEmpty,
    // totalUniqueItems,
    items,
    // totalItems,
    cartTotal,
    // updateItemQuantity,
    // removeItem,
    // emptyCart
  } = useCart();


  const navigate = useNavigate();
  const roleid = localStorage.getItem('roleid')
  // console.log(roleid);

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
<<<<<<< HEAD

  const Cart = () => {
    navigate('/cart');

  }


=======
  const Cart = () => {
    navigate('/cart')
  }
>>>>>>> 5c4ea0d8625c106901cb7975c7bebf0e88e321ad
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

const logoutuser = ()=>{
  console.log("logout");
  localStorage.clear();
  navigate('/login');
}


  // Local Storeage 
  const count = localStorage.getItem('count')
  // const prize = localStorage.getItem('prize')

  function Profilefunc() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


<<<<<<< HEAD
=======
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

>>>>>>> 5c4ea0d8625c106901cb7975c7bebf0e88e321ad
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid ">
          <a className="navbar-brand " href="#"><h1 style={{paddingTop:"4px"}}>GreenValley</h1></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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

                <div className="dropdown">
                  <a className="nav-link text-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                    aria-expanded="false"  >Pages</a>


                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ width: '0px' }}>
                    <li><a className="dropdown-item text-dark" href="#" style={{ width: '100px', }}>Pages 1</a></li>
                    <li><a className="dropdown-item text-dark" href="#" style={{ width: '100px', }}>Pages 1</a></li>
                    <li><a className="dropdown-item text-dark" href="#" style={{ width: '100px', }}>Pages 1</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={contact} >Contact</a>
              </li>

<<<<<<< HEAD
              <li className="nav-item">
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              </li>
              <li className="nav-item">
              <a className="nav-link text-dark" onClick={Cart}><i className="fa-solid fa-cart-shopping"></i>[{count}]</a>
              </li>


            </ul>


              <div className="dropdown dropleft" >
                <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                </button>
                <div className="dropdown-menu pull-right" aria-labelledby="dropdownMenuButton" style={{paddingTop:"100px" ,right: "0", left: "auto"}}>
                  <a className="dropdown-item " onClick={profilePage}>Dashboard</a>
                  <a className="dropdown-item" href="#">Feedback</a>
                  <a className="dropdown-item" href="#">Setting</a>

                  <hr />
                  <a className="dropdown-item" href="#">Logout</a>
                </div>
              </div>
            

=======
            </ul>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={Cart} ><i className="fa-solid fa-cart-shopping"></i>[1]</a>

              </li>   <li className="nav-item">
                <a className="nav-link text-dark"  ><i className="fa-sharp fa-solid fa-bell"></i></a>
              </li>
              <li className="nav-item dropdown">
                {!roleid ? <a className="nav-link text-dark" onClick={Cart} href="/login">Login</a> : <>
                  <a className="nav-link text-dark ali dropbtn" onClick={Profilefunc} ><i className="fa-solid fa-user"></i></a>
                  <div id="myDropdown" className="dropdown-content" >
                    <ul style={{ paddingLeft: "0.5rem", textDecoration: "none" }}>
                      <li>
                        <a href="#home p-0" style={{ paddingTop: '8px' }}><img
                          className="profile-user-img img-responsive img-circle ms-5  rounded-circle"
                          src="http://app.smartalgo.in/assets/dist/img/avatar.png"
                          alt="User profile picture"
                          style={{ width: "60px", border: "3px solid black", textAlign: "center", justifyContent: "center" }} />
                        </a>
                      </li>
                      <hr style={{ border: "1px solid black", paddingLeft: "0", paddingRight: "0" }} />
                      <li>  <a onClick={profilePage}>Dashboard</a></li>
                      <li>  <a href="setting">setting</a></li>
                      <li>  <a href="about">About us</a></li>
                      <li>  <a onClick={logoutuser} href="login">Logout</a></li>
                    </ul>


                  </div>
                </>} </li>


            </ul>
>>>>>>> 5c4ea0d8625c106901cb7975c7bebf0e88e321ad
          </div>
        </div>
      </nav>

<<<<<<< HEAD

=======
>>>>>>> 5c4ea0d8625c106901cb7975c7bebf0e88e321ad
    </>
  )
}

export default Header