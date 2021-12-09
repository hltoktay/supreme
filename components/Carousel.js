import React from 'react'

export default function Carousel() {
    return (
      <>
      
    
<div id="myCarousel" class="carousel slide d-none d-sm-block" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/banner1.png" class="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" focusable="false"/>
        

        <div class="container">
          <div class="carousel-caption text-start">
            {/* <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/banner2.png" class="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" focusable="false"/>

        <div class="container">
          <div class="carousel-caption">
            {/* <h1 className="text-uppercase">Check Available Branch</h1>
            <p>Safe & fast food delivery in all branch.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p> */}
          </div>
        </div>
      </div>
      
    </div>

  </div>
      </>

    )
}
