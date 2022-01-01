import React from 'react'
import Link from 'next/link';

import Carousel from './Carousel';
import Sidebar from './Sidebar';
import Options from './Options';
import Footer from './Footer';

import { NextSeo } from 'next-seo';

export default function Layout({ children }) {
    return (
        <>
         <NextSeo
      title="Supreme Doner Kebab"
      description=""
      keywords={['kebab london', 'london eat doner', 'best kebab place']}
      icon='/favicon.ico'
    />
      <div className="">
       <nav className="navbar navbar-expand-lg navbar-light bg-light d-sm-none">
          
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
           
            <div className="collapse navbar-collapse px-3" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <Link href="/">
                <a className="nav-item nav-link active" >
                  Our Food <span className="sr-only">(current)</span>
                </a>
                </Link>
                <Link href="/locations">
                <a className="nav-item nav-link" >
                  Locations
                </a>
                </Link>
                <Link href="/online">
                <a className="nav-item nav-link" >
                  Order Online
                </a>
                </Link>
              </div>
            </div>
          </nav>
        <div className="row">
        
          <div className="col-md-1 d-none d-sm-block" id="sticky-sidebar">
            <div className="sticky-top">
              <Sidebar />
            </div>
          </div>

          <div className="col-md-11 col-xs-12 col-sm-12 main" id="main">
            <Carousel />

            <div className="page-content">{children}</div>

            <Options />
          </div>
        </div>

        <Footer />

        <style jsx>{`
          
        `}</style>
      </div>
      </>
    );
}
