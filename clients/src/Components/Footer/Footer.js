import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <>

      <footer>
        <div className="container footerContainer">
          <div className="footer-nav flex flex-around flex-start flex-g-1">
            <div className="col flex flex-column flex-start flex-g-1">
              <span className="logo-holder">
                <h3>Sneh jaiswal</h3>
              </span>
              <p className="site-decription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis id
                fames dolor.
              </p>
              <div className="social-medias flex flex-g-1">
                <a href="#" className="social-media flex">

                </a>
                <a href="#" className="social-media flex">

                </a>
                <a href="#" className="social-media flex">

                </a>
                <a href="#" className="social-media flex">

                </a>
              </div>
            </div>
            <div className="col flex flex-column flex-g-1 flex-start">
              <h3 className="col-title">Info</h3>
              <nav className="col-list">
                <ul>
                  <li>
                    <a href="#">Formats</a>
                  </li>
                  <li>
                    <a href="#">Compression</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Status</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col flex flex-column flex-g-1 flex-start">
              <h3 className="col-title">Resources</h3>
              <nav className="col-list">
                <ul>
                  <li>
                    <a href="#">Developer API</a>
                  </li>
                  <li>
                    <a href="#">Tools</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col flex flex-column flex-g-1 flex-start">
              <h3 className="col-title">Company</h3>
              <nav className="col-list">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Sustainability</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* There is no copyright. use as you wish */}
          <div className="copyright">© 2022 – All Rights Reserved. (Not real)</div>
        </div>
      </footer>

    </>
  )
}

export default Footer