import React from 'react'
import './Home2.css'

function Home2() {
  return (
    <>
    
    <section id="shiping">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="shipping-box">
          <div className="box-icon">
            <i className="fas fa-truck" />
          </div>
          <div className="box-title">
            <h3>Free Shipping</h3>
            <p>above $5 only</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="shipping-box">
          <div className="box-icon">
            <i className="far fa-address-book" />
          </div>
          <div className="box-title">
            <h3>Certified Organic</h3>
            <p>100% guarantee</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="shipping-box">
          <div className="box-icon">
            <i className="far fa-money-bill-alt" />
          </div>
          <div className="box-title">
            <h3>Huge Savings</h3>
            <p>at lowest price</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="shipping-box">
          <div className="box-icon">
            <i className="fas fa-recycle" />
          </div>
          <div className="box-title">
            <h3>Easy Returns</h3>
            <p>no questions asked</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default Home2