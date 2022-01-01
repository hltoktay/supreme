import React from 'react'

export default function contact() {
    return (
      <div>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section text-uppercase">Contact Us</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="wrapper">
                  <div className="row no-gutters">
                    <div className="col-md-6 d-flex align-items-stretch">
                      <div className="contact-wrap w-100 p-md-5 p-4 py-5">
                        <h3 className="mb-4">Write us</h3>
                        <div id="form-message-warning" className="mb-4"></div>
                        <div id="form-message-success" className="mb-4">
                          Your message was sent, thank you!
                        </div>
                        <form
                          method="POST"
                          id="contactForm"
                          name="contactForm"
                          className="contactForm"
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  cols="30"
                                  rows="6"
                                  placeholder="Message"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  value="Send Message"
                                  className="btn btn-primary"
                                />
                                <div className="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-stretch">
                      <div className="info-wrap w-100 p-md-5 p-4 py-5 img text-white">
                        <h3>Contact information</h3>
                    
                        <div className="dbox w-100 d-flex align-items-center mt-5">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-phone"></span>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span>Phone:</span>{" "}
                              <a href="tel://1234567920" style={{color: 'orange'}}>+ 1235 2355 98</a>
                            </p>
                          </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-paper-plane"></span>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span>Email:</span>{" "}
                              <a href="mailto:info@yoursite.com" style={{color: 'orange'}}>
                                info@supremedoner.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-globe"></span>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span>Website</span> <a href="#" style={{color: 'orange'}}>supremedoner.com</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>
          {`
            a {
              -webkit-transition: 0.3s all ease;
              -o-transition: 0.3s all ease;
              transition: 0.3s all ease;
              color: #f39422;
            }
            a:hover,
            a:focus {
              text-decoration: none !important;
              outline: none !important;
              -webkit-box-shadow: none;
              box-shadow: none;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            .h1,
            .h2,
            .h3,
            .h4,
            .h5 {
              line-height: 1.5;
              font-weight: 400;
              font-family: "Poppins", Arial, sans-serif;
              color: #000;
            }
            .ftco-section {
              padding: 7em 0;
            }

            .ftco-no-pt {
              padding-top: 0;
            }

            .ftco-no-pb {
              padding-bottom: 0;
            }

            .heading-section {
              font-size: 28px;
              color: #000;
            }

            .img {
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center center;
            }

            .form-control {
              height: 52px;
              background: transparent;
              color: rgba(255, 255, 255, 0.8) !important;
              font-size: 14px;
              border-radius: 0px;
              -webkit-box-shadow: none !important;
              box-shadow: none !important;
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .form-control::-webkit-input-placeholder {
              /* Chrome/Opera/Safari */
              color: rgba(255, 255, 255, 0.5) !important;
            }
            .form-control::-moz-placeholder {
              /* Firefox 19+ */
              color: rgba(255, 255, 255, 0.5) !important;
            }
            .form-control:-ms-input-placeholder {
              /* IE 0+ */
              color: rgba(255, 255, 255, 0.5) !important;
            }
            .form-control:-moz-placeholder {
              /* Firefox 18- */
              color: rgba(255, 255, 255, 0.5) !important;
            }
            .form-control:focus,
            .form-control:active {
              background: transparent;
              border-color: rgba(255, 255, 255, 0.5) !important;
            }

            textarea.form-control {
              height: inherit !important;
            }

            .wrapper {
              width: 100%;
              overflow: hidden;
              border-radius: 10px;
              -webkit-box-shadow: 0px 21px 41px -13px rgba(0, 0, 0, 0.18);
              -moz-box-shadow: 0px 21px 41px -13px rgba(0, 0, 0, 0.18);
              box-shadow: 0px 21px 41px -13px rgba(0, 0, 0, 0.18);
            }

            .contact-wrap {
              background: #272a34;
            }
            .contact-wrap h3 {
              color: #fff;
            }

            .info-wrap {
              background: #1c1e25;
            }
            .info-wrap h3 {
              color: white;
              font-size: 18px;
              position: relative;
            }
            .info-wrap .dbox {
              width: 100%;
              margin-bottom: 25px;
            }
            .info-wrap .dbox:last-child {
              margin-bottom: 0;
            }
            .info-wrap .dbox p {
              margin-bottom: 0;
            }
            .info-wrap .dbox p span {
              font-weight: 400;
              color: #fff;
            }
            .info-wrap .dbox p a {
              color: rgba(255, 255, 255, 0.3);
            }
            .info-wrap .dbox .icon {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.02);
            }
            .info-wrap .dbox .icon span {
              font-size: 20px;
              color: #fff;
            }
            .info-wrap .dbox .text {
              width: calc(100% - 50px);
            }

            .btn {
              padding: 12px 16px;
              cursor: pointer;
              border-width: 1px;
              border-radius: 2px;
              font-size: 14px;
              font-weight: 400;
              -webkit-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
              -moz-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
              box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
              position: relative;
              -webkit-transition: 0.3s;
              -o-transition: 0.3s;
              transition: 0.3s;
            }
            @media (prefers-reduced-motion: reduce) {
              .btn {
                -webkit-transition: none;
                -o-transition: none;
                transition: none;
              }
            }
            .btn:hover,
            .btn:active,
            .btn:focus {
              outline: none !important;
              -webkit-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.22) !important;
              -moz-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.22) !important;
              box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.22) !important;
            }
            .btn.btn-primary {
              background: #f39422 !important;
              border-color: #f39422 !important;
              color: #fff;
            }
            .btn.btn-primary:hover,
            .btn.btn-primary:focus {
              border-color: #d67a0c !important;
              background: #d67a0c !important;
            }

            .contactForm .form-control {
              border: none;
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
              padding: 0;
            }

            #contactForm .error {
              color: #f65c78;
              font-size: 12px;
            }

            #contactForm .form-control {
              font-size: 16px;
            }

            #message {
              resize: vertical;
            }

            #form-message-warning,
            #form-message-success {
              display: none;
            }

            #form-message-warning {
              color: red;
            }

            #form-message-success {
              color: #28a745;
              font-size: 18px;
              font-weight: 500;
            }

            .submitting {
              float: left;
              width: 100%;
              padding: 10px 0;
              display: none;
              font-size: 16px;
              font-weight: 500;
            }
          `}
        </style>
      </div>
    );
}
