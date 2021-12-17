import React from 'react';
import fetch from 'isomorphic-unfetch'

function CardMenu({ categories }) {
  

  return (
    <main>

      <section className="text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold">OUR MENU</h1>
          </div>
        </div>
      </section>

      <div className="album px-2 bg-light menu">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center px-5 menu">
        
        {categories.map(category => (
           <div className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
             <h1>{category.content}</h1>
            </div>
          </div>
        </div>
         ))}
        
      </div>
        </div>
      </div>
    </main>
    )
}



export default CardMenu;