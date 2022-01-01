import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <>
            <div className="text-white bg-light sidebar">
           
                <ul className="nav flex-column mb-auto">
                    <header className="nav-item ">
                    <Link href="/">
                        <a  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto" style={{marginLeft: '40px'}}>
                            <img src="./logo.png" width="160px" height="auto" />
                        </a>
                    </Link>
                    </header>

                    <li className="nav-item">
                    <Link href="/">
                        <a  className="nav-link" aria-current="page">
                            Our Food
                         </a>
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link href="/locations">
                        <a  className="nav-link" aria-current="page">
                            Locations
                         </a>
                    </Link>
                    </li>

                    <li className="nav-item ">
                    <Link href="/online">
                        <a className="nav-link" aria-current="page">
                            Order <br />Online
                         </a>
                    </Link>
                    </li>

                    <li className="nav-item ">
                    <Link href="/contact">
                        <a className="nav-link" aria-current="page">
                            Contact
                         </a>
                    </Link>
                    </li>
                </ul>


        <style jsx>{`
         
        `}</style>
            </div>
            
            </>
    )
}
