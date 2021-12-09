import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div class="text-white bg-light sidebar">
                <ul class="nav flex-column mb-auto">
                    <header class="nav-item ">
                        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto" style={{marginLeft: '40px'}}>
                            <img src="./logo.png" width="160px" height="auto" />
                        </a>
                    </header>

                    <li class="nav-item">
                        <a href="#" class="nav-link" aria-current="page">
                            Our Food
                         </a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link" aria-current="page">
                            Locations
                         </a>
                    </li>

                    <li class="nav-item ">
                        <a href="#" class="nav-link" aria-current="page">
                            Order <br />Online
                         </a>
                    </li>

                    <li class="nav-item ">
                        <a href="#" class="nav-link" aria-current="page">
                            Contact
                         </a>
                    </li>
                </ul>
            </div>
            
            </>
    )
}
