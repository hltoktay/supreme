import React from 'react'
import Carousel from '../components/Carousel';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import Hungry from '../components/Hungry';
import Footer from '../components/Footer';

export default function Home() {
  return (
   <>
      <div class="">
        <div class="row">
          <div class="col-1 d-none d-sm-block" id="sticky-sidebar">
            <div class="sticky-top">
              <Sidebar />
            </div>
          </div>

          <div class="col-11 main" id="main">
            <Carousel />

            <Menu />

            <Hungry />

          </div>






        </div>
          <Footer />
      </div>


    </>
  )
}
