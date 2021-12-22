import React from 'react'

export default function locations() {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="row">
          <div className="col-md-6 col-sm-6 map-responsive">
            <a href="https://goo.gl/maps/KhJorvq4vxwLthXU6" >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159306.9910892275!2d-0.32037068359376064!3d51.39989910000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876078d2b578ac7%3A0xa869d1d59025c4c1!2sSupreme%20Grill%20Mitcham!5e0!3m2!1sen!2suk!4v1640122861196!5m2!1sen!2suk"
                width="300"
                height="225"
                style={{ border: "2px solid orange" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </a>
          </div>
          <div className="col-md-6 col-sm-6 map-responsive">
            <a href="https://goo.gl/maps/KhJorvq4vxwLthXU6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159049.59238739693!2d-0.47063025436462536!3d51.473763103970676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766e7a565dd3e9%3A0xcbf1ec10edddf7b8!2sSupreme%20Grill!5e0!3m2!1sen!2suk!4v1640123071231!5m2!1sen!2suk"
                width="300"
                height="225"
                style={{ border: "2px solid orange"}}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </a>
          </div>
        </div>

        <style jsx>{`
       
        `}</style>
      </div>
    );
}
