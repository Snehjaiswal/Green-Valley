import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { Dropdown } from "react-bootstrap";



function Header() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();


  const navigate = useNavigate();
  const roleid = localStorage.getItem('roleid')

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
      navigate('/sellerProfile');
    } else if (roleid == 3) {
      navigate('/adminprofile');
    } else {
      navigate('/login');
    }
  }


  // Local Storeage 
  const count = localStorage.getItem('count')
  const prize = localStorage.getItem('prize')




  return (
    <>
      <div className="super_container bg-light header1">

        <div className="header_main">
          <div className="container">
            <div className="row">

              {/* Logo */}
              <div className="col-lg-2 col-sm-3 col-3 order-1">
                <div className="logo_container">
                  <div className="logo">
                    <a href="#">GreenValley</a>
                  </div>
                </div>
              </div>
              {/* Search */}
              <div className="col-lg-4 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div className="header_search">
                  <div className="header_search_content">
                    <div className="header_search_form_container">
                      <form action="#" className="header_search_form clearfix">
                        <input
                          type="search"
                          required="required"
                          className="header_search_input"
                          placeholder="Search for products..."
                        />
                        <button
                          type="submit"
                          className="header_search_button trans_300"
                          value="Submit"
                        >
                          <img
                            src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png"
                            alt=""
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wishlist */}
              <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                    <div className="wishlist_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png"
                        alt=""
                      />
                    </div>
                    <div className="wishlist_content">
                      <div className="wishlist_text">
                        <a href="#">Wishlist</a>
                      </div>
                      <div className="wishlist_count">10</div>
                    </div>
                  </div>
                  {/* Cart */}
                  <div className="cart">
                    <Link to="/cart">
                      <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                        <div className="cart_icon">
                          <img
                            src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png"
                            alt=""
                          />
                          <div className="cart_count">
                            <span>{count}</span>
                          </div>
                        </div>
                        <div className="cart_content">
                          <div className="cart_text">
                            <a href="#">Cart</a>
                          </div>
                          <div className="cart_price">RS. {cartTotal}</div>
                        </div>
                      </div>
                    </Link>
                  </div>

                </div>
              </div>

              {/* Profile Login */}
              <div className="col-lg-2 col-9 order-lg-4 order-2 text-lg-left text-right">
                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                    <div className="wishlist_icon" onClick={profilePage} >
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                      </svg>
                      PROFILE
                    </div>

                    {/* <div className="profile_content">
                      <div className="profile_text" onClick={profilePage}>
                        PROFILE
                    
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>
      </div>

      {/* Navbar */}
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

          <ul className="navbar-nav ml-auto " >
            <li className="nav-item dropdown rounded category" id='blockquote'>


              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textAlign: 'center' }}
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

          <ul className="navbar-nav gap-2 ">
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

          <ul className="navbar-nav ms-auto gap-3 Nav3">
            <li className="nav-item rounded bg-light ">
              Call Support: 0123456789

            </li>
          </ul>

        </div>

      </nav>
    </>
  )
}

export default Header