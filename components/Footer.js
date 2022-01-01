import React from 'react'

export default function Footer() {
    return (
      <footer class="container py-5">
        <div class="row">
          <div class="col-2 col-md d-none d-sm-block">
            <img src="/logo.png" className="img-fluid" width="84" height="84" />
            <ul className="list-group list-group-horizontal list-unstyled mb-3">
              <li><a href="#"><i class="fab fa-facebook mx-2"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram mx-2"></i></a></li>
              <li><a href="#"><i class="fab fa-google mx-2"></i></a></li>
            </ul>

            <small class="d-block text-muted">&copy; 2017–2021</small>
          </div>
          <div class="col-4 col-md">
            <h5>More</h5>
            <ul class="list-unstyled text-small">
               <li><a class="link-secondary" href="/">Menu</a></li>
              <li><a class="link-secondary" href="/contact">Customer Services</a></li>
              {/* <li><a class="link-secondary" href="/">Terms and Condition</a></li>
              <li><a class="link-secondary" href="#">Privacy Policy</a></li> */}
              <li><a class="link-secondary" href="#">Franchising</a></li>
            </ul>
          </div>
          <div class="col-3 col-md">
            <h5>Order Online </h5>
            <ul class="list-unstyled text-small">
           
              <li><a class="link-secondary" href="#">Just East</a></li>
              <li><a class="link-secondary" href="#">Deliveroo</a></li>
              <li><a class="link-secondary" href="#">Uber Eats</a></li>
            
            </ul>
          </div>
          <div class="col-3 col-md">
            <h5>Social</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary" href="/">Facebook</a></li>
              <li><a class="link-secondary" href="/">Instagram</a></li>
              <li><a class="link-secondary" href="/contact">Contact</a></li>
            </ul>
          </div>


        </div>
      </footer>
    )
}
