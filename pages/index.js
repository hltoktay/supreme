import React from 'react'
import Carousel from '../components/Carousel';
import Sidebar from '../components/Sidebar';
import CardMenu from '../components/CardMenu';
import Hungry from '../components/Hungry';
import Footer from '../components/Footer';

import fetch from 'isomorphic-unfetch'

const Home = ({ categories }) => {
  console.log(categories)

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

          <CardMenu key={categories.id} categories={categories} />
    

          <Hungry />
        </div>
      </div>
      <Footer />
    </div>
);
}


export const getStaticProps = async () => {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/hltoktay/supreme/categories`)
  const data = await res.json()

 

  return {
    props: {
      categories: data
    }
  }
}

export default Home;