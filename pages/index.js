import React from 'react'
import Carousel from '../components/Carousel';
import Sidebar from '../components/Sidebar';
import CardMenu from '../components/CardMenu';
import Hungry from '../components/Hungry';
import Footer from '../components/Footer';

const Home = ({ menu }) => {
  console.log(menu)

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
      
       

          <Hungry />
        </div>
      </div>
      <Footer />
    </div>
);
}


export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/api/menus?fields=menu_title`)
  const data = await res.json()

  return {
    props: {
      menu: data.data
    }
  }
}

export default Home;