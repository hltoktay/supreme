import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
      <footer className="container py-5">
        <div className="row">
          <div className="col-2 col-md d-none d-sm-block">
            <img src="/logo.png" className="img-fluid" width="84" height="84" />
            <ul className="list-group list-group-horizontal list-unstyled mb-3">
              <li><Link href="#"><a><i className="fab fa-facebook mx-2"></i></a></Link></li>
              <li><Link href="#"><a><i className="fab fa-instagram mx-2"></i></a></Link></li>
              <li><Link href="#"><a><i className="fab fa-google mx-2"></i></a></Link></li>
            </ul>

            <small className="d-block text-muted">&copy; 2017–2021</small>
          </div>
          <div className="col-4 col-md">
            <h5>More</h5>
            <ul className="list-unstyled text-small">
               <li><Link href="#"><a className="link-secondary">Menu</a></Link></li>
              <li><Link href="#"><a className="link-secondary" >Customer Services</a></Link></li>
              {/* <li><a className="link-secondary" href="/">Terms and Condition</a></li>
              <li><a className="link-secondary" href="#">Privacy Policy</a></li> */}
              <li><Link href="#"><a className="link-secondary">Franchising</a></Link></li>
            </ul>
          </div>
          <div className="col-3 col-md">
            <h5>Order Online </h5>
            <ul className="list-unstyled text-small">
           
              <li><Link href="#"><a className="link-secondary">Just East</a></Link></li>
              <li><Link href="#"><a className="link-secondary">Deliveroo</a></Link></li>
              <li><Link href="#"><a className="link-secondary">Uber Eats</a></Link></li>
            
            </ul>
          </div>
          <div className="col-3 col-md">
            <h5>Social</h5>
            <ul className="list-unstyled text-small">
              <li><Link href="#"><a className="link-secondary">Facebook</a></Link></li>
              <li><Link href="#"><a className="link-secondary">Instagram</a></Link></li>
              <li><Link href="#"><a className="link-secondary">Contact</a></Link></li>
            </ul>
          </div>


        </div>
      </footer>
    )
}
