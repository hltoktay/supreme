import React from 'react'

export default function Hungry() {
    return (
      <>
      <section className="section_buttons">
        <div className="d-md-flex flex-md-equal w-100 my-md-5 ps-md-5 justify-content-center">
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden text-uppercase">
            <div className="my-3 py-3 mx-5">
              <a
                style={{ cursor: "pointer", textDecoration: 'none' }}
                href="/order_online"
                className="display-4"
              >
                Order Online
              </a>
              <p className="lead">Safe and Fast Delivery</p>
            </div>
            <div
              className="bg-light shadow-sm mx-auto"
              style={{
                width: "90%",
                height: "400xp",
                borderRadius: "21px 21px 0 0 "
              }}
            ></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden text-uppercase">
            <div className="my-3 p-3 mx-5">
              <a
                style={{ cursor: "pointer" }}
                href="/locations"
                className="display-4"
              >
                Find Location
              </a>
              <p className="lead">Choose location </p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{
                width: "90%",
                height: "400xp",
                borderRadius: "21px 21px 0 0 "
              }}
            ></div>
          </div>
        </div>
    </section>
      </>
    );
}
