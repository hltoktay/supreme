import React from 'react'
import Link from 'next/link';

export default function Options() {
    return (
      <>
      <section className="section_buttons">
        <div className="d-md-flex flex-md-equal w-100 my-md-5 ps-md-5 justify-content-center">
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden text-uppercase">
            <div className="my-3 py-3 mx-5">
            <Link  href="/online">
              <a
                style={{ cursor: "pointer", textDecoration: 'none' }}
                className="display-5"
              >
                Order Online
              </a>
              </Link>
              <p className="lead mt-3">Safe and Fast Delivery</p>
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
            <Link href="/locations">
              <a
                style={{ cursor: "pointer" }}
                
                className="display-5"
              >
                Find Location
              </a>
            </Link>
              <p className="lead mt-3">Choose location </p>
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

        <style jsx>{`
          .display-5:hover {
            color: orange
          }

        `}


        </style>
    </section>
      </>
    );
}
