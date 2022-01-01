import React from 'react'

export default function Carousel() {
    return (
      <>
      
    
<div id="myCarousel" className="carousel slide d-none d-sm-block" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/banner1.png" className="bd-placeholder-img img-fluid" width="100%" height="100%" aria-hidden="true" focusable="false"/>
        

        <div className="container">
          <div className="carousel-caption text-start">
            {/* <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/banner2.png" className="bd-placeholder-img img-fluid" width="100%" height="100%" aria-hidden="true" focusable="false"/>

        <div className="container">
          <div className="carousel-caption">
            {/* <h1 classNameName="text-uppercase">Check Available Branch</h1>
            <p>Safe & fast food delivery in all branch.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p> */}
          </div>
        </div>
      </div>
      
    </div>

  </div>
      </>

    )
}
