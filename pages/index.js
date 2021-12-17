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
    
         {/* {categories.map(category => (
           <div key={category.id} className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
             <h1>{ category.content}</h1>
            </div>
          </div>
        </div>
         ))} */}

          <Hungry />
        </div>
      </div>
      <Footer />
    </div>
);
}


export const getStaticProps = async () => {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/hltoktay/supreme/db`)
  const data = await res.json()

 

  return {
    props: {
      categories: data
    }
  }
}

export default Home;