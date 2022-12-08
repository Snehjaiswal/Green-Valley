import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";

function Header() {
  const { totalUniqueItems } = useCart();

  const count = localStorage.getItem('count')



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
              <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
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
                        <div
                          className="custom_dropdown"
                          style={{ display: "none" }}
                        >
                          <div className="custom_dropdown_list">
                            <span className="custom_dropdown_placeholder clc">
                              All Categories
                            </span>
                            <i className="fas fa-chevron-down" />
                            <ul className="custom_list clc">
                              <li>
                                <a className="clc" href="#">
                                  All Categories
                                </a>
                              </li>
                              <li>
                                <a className="clc" href="#">
                                  Computers
                                </a>
                              </li>
                              <li>
                                <a className="clc" href="#">
                                  Laptops
                                </a>
                              </li>
                              <li>
                                <a className="clc" href="#">
                                  Cameras
                                </a>
                              </li>
                              <li>
                                <a className="clc" href="#">
                                  Hardware
                                </a>
                              </li>
                              <li>
                                <a className="clc" href="#">
                                  Smartphones
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
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
                    {/* <div className="wishlist_content">
                  <div className="wishlist_text">
                    <a href="#">Wishlist</a>
                  </div>
                  <div className="wishlist_count">10</div>
                </div> */}
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
                          <div className="cart_price">$185</div>
                        </div>
                      </div>
                    </Link>
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