import React from 'react'
import { useNavigate } from 'react-router-dom';
import tametoes from '../images/tametos.jpg'
import Spinach from '../images/Spinach.jpg'
import Garlic from '../images/Garlic.jpg'
import Carrots from '../images/Carrots.jpg'
import Broccoli from '../images/Broccoli.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import img9 from '../images/9.jpg'
import img10 from '../images/10.jpg'
import img11 from '../images/11.jpg'


function Home3() {
  const navigate = useNavigate();

  const shop = () => {
    navigate('/shop');

  }

  return (
    <>


      <section id="head">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                className="head-img"
                src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Vegetables-PNG/Organic_Vegetables_PNG_Picture.png?m=1507172105"
                alt=""
              />
            </div>
            <div className="col-md-6 head-text">
              <h6>BEST QUALITY PRODUCTS</h6>
              <h1>Join the Organic Movement!</h1>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sapien.
              </p>
              <button className="my-btn btn" onClick={shop}>
                <i className="fas fa-cart-arrow-down" /> Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>



      <section id="summer-collection">
        <div className="container">
          <div className="sc-content">
            <h1>Famus Vegetable</h1>
            <p className="description">A tomato is a nutrient-dense superfood that offers benefit to a range of bodily systems. Its nutritional content supports healthful skin, weight loss, and heart health.
            <br /> Tomatoes are the major dietary source of the antioxidant lycopene, which has been linked to many health benefits, including reduced risk of heart disease and cancer.
              They are also a great source of vitamin C, potassium, folate, and vitamin K</p>
            <a href="#">discover now</a> </div>
          <div className="sc-media">
            <div className="sc-media-bg"> 
            <img style={{height:'600px'}} src={tametoes} alt="sc-image" /> </div>
          </div>
        </div>
      </section>


      <div>
        <section id="products">
          <div className="container">
            <div className="products-header">
              <h2>popular products</h2>
              <p>Most popular fresh vegetables revealed.</p>
            </div>
            <div className="product product-1">
              <figure> <img style={{height:'300px',width:'250px'}} src={Spinach} alt="product-image" />
                <figcaption>Spinach</figcaption>
                <figcaption>RS. 56.00</figcaption>
              </figure>
            </div>
            <div className="product product-2">
              <figure> <img style={{height:'300px',width:'250px'}} src={Garlic} alt="product-image" />
                <figcaption>Garlic</figcaption>
                <figcaption>RS. 84.00</figcaption>
              </figure>
            </div>
            <div className="product product-3">
              <figure> <img style={{height:'300px',width:'250px'}} src={Broccoli} alt="product-image" />
                <figcaption>Broccoli</figcaption>
                <figcaption>RS. 48.00</figcaption>
              </figure>
            </div>
            <div className="product product-4">
              <figure> <img style={{height:'300px',width:'250px'}} src={Carrots} alt="product-image" />
                <figcaption>Carrots</figcaption>
                <figcaption>RS. 89.00</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section id="collections">
          <div className="container">
            <div className="c-1">
              <div className="c-1-image-holder"> <img src={img5} alt="image" /> </div>
            </div>
            <div className="c-2">
              <h2>featured collection</h2>
              <hr />
              <div className="c-2-image-holder"> <img className="left" src={img4} alt /><img className="right" src={img6} alt /></div>
              <p className="button">view all collections</p>
            </div>
          </div>
        </section>
        <section id="blog">
          <div className="container">
            <div className="blog-header">
              <h2>latest from blog</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="blog-content">
              <div className="blog-1">
                <div className="blog-1-image-holder"> <img src={img7} alt="image" /> </div>
                <div className="blog-1-content">
                  <h4>Lorem Ipsum</h4>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <p className="button">view post</p>
                </div>
              </div>
              <div className="blog-2">
                <div className="blog-2-image-holder"> <img src={img8} alt="image" /> </div>
                <div className="blog-2-content">
                  <h4>Lorem Ipsum</h4>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <p className="button">view post</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>


    </>
  )
}

export default Home3