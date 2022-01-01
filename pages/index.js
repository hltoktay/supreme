import React from 'react'
import Link from 'next/link'

import fetch from 'isomorphic-unfetch'

import { createClient } from 'contentful';
import CardMenu from '../components/CardMenu';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFULL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'menu'})

  return {
    props: {
      categories: res.items,
      revalidate: 1
    }
  }

}

const Home = ({ categories }) => {
 //   console.log(categories)

   return (
     <div>
       <section className="text-center container" id="menu">
         <div className="row py-lg-5">
           <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
             <h1 className="fw-bold">OUR MENU</h1>
           </div>
         </div>
       </section>

       <div className="album px-3 bg-light menu">
         <div className="container">

           <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 g-3 text-center px-5 menu">

             {categories.map(category => (
               <CardMenu key={category.sys.id} category={category} />
               
             ))}
  
           </div>
         </div>
       </div>

     </div>
   
);
}


export default Home;