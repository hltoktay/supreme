import React from 'react'
import Link from 'next/link';

import Carousel from './Carousel';
import Sidebar from './Sidebar';
import Hungry from './Hungry';
import Footer from './Footer';

export default function Layout({ children }) {
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


                        <div className="page-content">
                        { children }
                        </div>


                        <Hungry />
                    </div>
                </div>
                <Footer />
            </div>
   
    )
}
