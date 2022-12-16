import React from 'react'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'

function Blogs() {
  return (
 <>
 
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
 
 </>
  )
}

export default Blogs