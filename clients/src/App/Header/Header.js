import React from 'react'
import './Header.css'

function Header() {
  return (
 <>
 


    {/* Top Bar */}
    <div className="top_bar">
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-row">
                   
            <div className="top_bar_content ms-auto">
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
    </div>
   



 </>
  )
}

export default Header