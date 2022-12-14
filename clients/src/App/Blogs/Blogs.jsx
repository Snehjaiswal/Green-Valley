import React from 'react'

function Blogs() {
  return (
 <>
 
 <section id="blog">
          <div className="container">
            <div className="blog-header">
              <h2>latest from blog</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="row blog-content">

              <div className="col-sm-6 blog-1">
                <div className="blog-1-image-holder"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412548/E-commerce%20landing%20page/blog/blog-2-img_3x.jpg" alt="image" /> </div>
                <div className="blog-1-content">
                  <h4>Lorem Ipsum</h4>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <p className="button">view post</p>
                </div>
              </div>

              <div className="col-sm-6 blog-2">
                <div className="blog-2-image-holder"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/blog/blog-1-img_3x.jpg" alt="image" /> </div>
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