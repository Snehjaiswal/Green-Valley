import React from 'react'
import '../App.css'
import Home2 from './Home2'
import Home3 from './Home3'


import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'



function Home() {
  return (
  <>
  
  <div
  id="carouselExampleFade"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img2} className="img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img3} className="img-fluid" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Home2 />
<Home3 />

  </>
  )
}

export default Home