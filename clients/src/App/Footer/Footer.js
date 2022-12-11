import React from 'react'
import './Footer.css'
function Footer() {
  return (
<>
<footer id="footer">
  <div className="container">
    <div className="row">
<hr />
      <div className="col-md-4">
        <div className="footer-box">
          <div className="footer-title">
            <h5>Download Our Mobile App</h5>
          </div>
          <div className="footer-desc">
            <p>
              Molestiae reiciendis neque arcu! Tempor reprehenderit accusantium
              quibusdam iste accusan.
            </p>
          </div>
          <div className="app-img">
            <div className="app-store">
              <a href="#">
                <img src="images/play-store.png" alt="" />
              </a>
            </div>
            <div className="app-store">
              <a href="#">
                <img src="images/app-store.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer-box">
          <div className="footer-title">
            <div className="footer-logo">
              <img src="images/logo02.png" alt="" />
            </div>
          </div>
          <div className="footer-desc">
            <p style={{ textAlign: "center" }}>
              Molestiae reiciendis neque arcu! Tempor reprehenderit accusantium
              quibusdam iste accusan.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-box">
          <div className="footer-title">
            <h5>Quick Links</h5>
          </div>
          <div className="footer-desc">
            <ul>
              <li>
                <a className="nav-link text-dark" href="#">Know More About Us</a>
              </li>
              <li>
                <a className="nav-link text-dark" href="#">Visit Store</a>
              </li>
              <li>
                <a className="nav-link text-dark" href="#">Let's Connect</a>
              </li>
              <li>
                <a className="nav-link text-dark" href="#">Locate Store</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-box">
          <div className="footer-title">
            <h5>Sites Links</h5>
          </div>
          <div className="footer-desc">
            <ul>
              <li>
                <a className="nav-link text-dark" href="#">Privacy Policy</a>
              </li>
              <li>
                <a className="nav-link text-dark" href="#">Shipping Details</a>
              </li>
              <li>
                <a className="nav-link text-dark" href="#">Offer Coupons</a>
              </li>
              <li>
                <a className="nav-link text-dark" href="#">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

</>

  )
}

export default Footer