import React from 'react'
import { useNavigate } from 'react-router-dom';


function Sidebar() {
    const navigate = useNavigate();
    const sellerslist = () => {
        // alert("okk")
        navigate('/admin/sellerslist')
    }
    const userslist = () => {
        navigate('/admin/userslist')
    }
    const home = () => {
        navigate('/admin/home')
    }

const Adproducts =()=>{
    navigate('/admin/products')
}

  return (
   <>
        <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                    <div className="container-fluid">
                        {/* Toggler */}
                        <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        {/* Brand */}
                        <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                            <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..." />
                        </a>
                        {/* User menu (mobile) */}
                        <div className="navbar-user d-lg-none">
                            {/* Dropdown */}
                            <div className="dropdown">
                                {/* Toggle */}
                                <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="avatar-parent-child">
                                        <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                                        <span className="avatar-child avatar-badge bg-success" />
                                    </div>
                                </a>
                                {/* Menu */}
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                    <a href="#" className="dropdown-item">Profile</a>
                                    <a href="#" className="dropdown-item">Settings</a>
                                    <a href="#" className="dropdown-item">Billing</a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">Logout</a>
                                </div>
                            </div>
                        </div>
                        {/* Collapse */}
                        <div className="collapse navbar-collapse" id="sidebarCollapse">
                            {/* Navigation */}
                            <ul className="navbar-nav">
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-house" /> Dashboard
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" onClick={home}>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={sellerslist}>
                                        Sellers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={ userslist}>
                                        Users
                                    </a>
                                </li>
                            
                                <li className="nav-item">
                                    <a className="nav-link" onClick={ Adproducts}>
                                        Products
                                    </a>
                                </li>   
                                <li className="nav-item">
                                    <a className="nav-link" onClick={ userslist}>
                                        Setting
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        Logout
                                    </a>
                                </li>

                            </ul>
                            {/* Divider */}
                            <hr className="navbar-divider my-5 opacity-20" />


                        </div>
                    </div>
                </nav>
   
   </>
  )
}

export default Sidebar