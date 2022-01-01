import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div className="text-white bg-light sidebar">
           
                <ul className="nav flex-column mb-auto">
                    <header className="nav-item ">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto" style={{marginLeft: '40px'}}>
                            <img src="./logo.png" width="160px" height="auto" />
                        </a>
                    </header>

                    <li className="nav-item">
                        <a href="/" className="nav-link" aria-current="page">
                            Our Food
                         </a>
                    </li>

                    <li className="nav-item">
                        <a href="/locations" className="nav-link" aria-current="page">
                            Locations
                         </a>
                    </li>

                    <li className="nav-item ">
                        <a href="/online" className="nav-link" aria-current="page">
                            Order <br />Online
                         </a>
                    </li>

                    <li className="nav-item ">
                        <a href="/contact" className="nav-link" aria-current="page">
                            Contact
                         </a>
                    </li>
                </ul>


        <style jsx>{`
         
        `}</style>
            </div>
            
            </>
    )
}
