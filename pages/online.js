import React from 'react'
import Link from 'next/link';

export default function Online() {
    return (
      <div className="online col-6 xol-sm-12 d-flex justify-content-center">
        <div className="card text-center">
          <h3 className="card-header text-uppercase">Get Started</h3>
          <div className="card-body w-100">
            {/* <h5 className="card-title">You can order any tim</h5> */}
            <p className="card-text">
             Best way to order food online!
            </p>
            <div className="col-12">
            <Link href="https://deliveroo.co.uk/">
              <a className="btn">
                <img
                  width="150px"
                  height="auto"
                  src="/deliveroo.png"
                />
              </a>
              </Link>
              <Link href="https://www.just-eat.co.uk/" >
                <a className="btn">
                <img
                  width="150px"
                  height="auto"
                  src="/justeat.png"
                />
              </a>
              </Link>
              <Link href="https://www.ubereats.com/gb">
                <a className="btn">
                <img
                  width="150px"
                  height="auto"
                  src="/ubereat.png"
                />
              </a>
              </Link>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .online {
              margin-left: 18%;
              margin-right: 18%;
              width: auto;
            }
          `}
        </style>
      </div>
    );
}
