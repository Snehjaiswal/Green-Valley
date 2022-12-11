import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";

function Header() {
  const { totalUniqueItems, cartTotal } = useCart();

  const count = localStorage.getItem('count')
  const prize = localStorage.getItem('prize')




  return (
    <>
      <div className="super_container bg-light header1">
        {/* <div className="top_bar">
                <div className="container_fluid">
                    <div className="row">
                        <div className="col d-flex flex-row headermargin" >

                            <div className="top_bar_content ms-auto" >
                                <div className="top_bar_menu">
                                    <ul className="standard_dropdown top_bar_dropdown">
                                        <li>
                                            <a href="#">
                                                English
                                                <i className="fas fa-chevron-down" />
                                            </a>

                                        </li>
                                        <li>
                                            <a href="#">
                                                $ US dollar
                                                <i className="fas fa-chevron-down" />
                                            </a>

                                        </li>
                                    </ul>
                                </div>
                                <div className="top_bar_user">
                                    <div className="user_icon">
                                        <img
                                            src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <a href="#">Register</a>
                                    </div>
                                    <div>
                                        <a href="#">Sign in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  */}

        <div className="header_main">
          <div className="container">
            <div className="row">
              {/* Logo */}
              <div className="col-lg-2 col-sm-3 col-3 order-1">
                <div className="logo_container">
                  <div className="logo">
                    <a href="#">SNEH</a>
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
                          <div className="cart_price">RS. {prize}</div>
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
                    <div className="wishlist_icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                      </svg>
                    </div>
                    <div className="wishlist_content">
                      <div className="wishlist_text">
                        <a href="#">Profile </a>
                      </div>
                    </div>
                  </div>


                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header