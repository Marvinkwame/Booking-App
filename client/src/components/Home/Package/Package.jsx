import React from "react";
import "./Package.css";

const Package = () => {
  return (
    <section className="padding-block-900">
      <div className="container">
        <h2 className="package-title">Popular Package</h2>
        <p className="package-text">The most popular tour packages presented to you</p>

        <div className="packages">
          <div className="package">
            <img
              src="https://media.istockphoto.com/id/1319453433/photo/modern-luxury-house-with-private-infinity-pool-in-dusk.webp?b=1&s=170667a&w=0&k=20&c=rf0aZXhy20e04Puwy-fRvsmZDTNWd7eZq_WUJfnu0w4="
              alt=""
              className="package-img"
            />
            <div className="package-detail">
              <p>New York</p>
              <p>3 Days, 2 Days</p>
            </div>
          </div>

          <div className="package">
            <img
              src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.webp?b=1&s=170667a&w=0&k=20&c=IqvLSVwtG4iepMoKZR29ZfBvfzbq8PL6lxfyYRU_5O0="
              alt=""
              className="package-img"
            />
            <div className="package-detail">
              <p>New York</p>
              <p>3 Days, 2 Days</p>
            </div>
          </div>

          <div className="package">
            <img
              src="https://media.istockphoto.com/id/641448082/photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-sunshine.webp?b=1&s=170667a&w=0&k=20&c=66dpZvYuwIeXCufS_Q9PV0pBZiJKagF11s0ZlSB6DNQ="
              alt=""
              className="package-img"
            />
            <div className="package-detail">
              <p>New York</p>
              <p>3 Days, 2 Days</p>
            </div>
          </div>

          <div className="package">
            <img
              src="https://media.istockphoto.com/id/1250509758/photo/couple-in-a-vacation.webp?b=1&s=170667a&w=0&k=20&c=AUFSQdM145hWY2rwitnvI18cRqtfFP7K9CpagOLume4="
              alt=""
              className="package-img"
            />
            <div className="package-detail">
              <p>New York</p>
              <p>3 Days, 2 Days</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Package;
