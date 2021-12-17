import React from 'react'
import Carousel from '../components/Carousel';
import Sidebar from '../components/Sidebar';
import CardMenu from '../components/CardMenu';
import Hungry from '../components/Hungry';
import Footer from '../components/Footer';

import fetch from 'isomorphic-unfetch'

const Home = ({  }) => {
  console.log()

   return (
    <div className="">
      <div className="row">
        <div className="col-1 d-none d-sm-block" id="sticky-sidebar">
          <div className="sticky-top">
            <Sidebar />
          </div>
        </div>

        <div className="col-11 main" id="main">
          <Carousel />
      
        <CardMenu />

          <Hungry />
        </div>
      </div>
      <Footer />
    </div>
);
}


export async function getStaticProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/hltoktay/supreme/db`)
  const data = await res.json()

  return {
    data
  }
}

export default Home;