import React from 'react'
import '../App.css'
import Home2 from './Home2'
import Home3 from './Home3'


// Images All
import Spinach from '../images/Spinach.jpg'
import Garlic from '../images/Garlic.jpg'
import Carrots from '../images/Carrots.jpg'
import Broccoli from '../images/Broccoli.jpg'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import img9 from '../images/9.jpg'
import img10 from '../images/10.jpg'
import img11 from '../images/11.jpg'


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
    <div className="carousel-item">
      <img src={img4} className="img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img5} className="img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img6} className="img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img7} className="img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img8} className="img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img9} className="img-fluid" alt="..." />
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