import React from 'react'
import Link from 'next/link';

import Carousel from './Carousel';
import Sidebar from './Sidebar';
import Options from './Options';
import Footer from './Footer';

export default function Layout({ children }) {
    return (

        <div className="">
            <div className="row">
                <div className="col-md-1 d-none d-sm-block" id="sticky-sidebar">
                    
                    <div className="sticky-top">
                        <Sidebar />
                    </div>
                </div>

                <div className="col-md-11 col-sm-12 main" id="main">
                    <Carousel />


                    <div className="page-content">
                        {children}
                    </div>


                    <Options />
                </div>
            </div>

            <Footer />
        </div>
   
    )
}
